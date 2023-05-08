# -- coding: utf-8 --
import os
import shutil
import re
from obs import Obsidian
from utils import fetch_front_matter


def isCompleted(fp):
    try:
        info = fetch_front_matter(fp)
        if info["status"] == "complete":
            return True
        else:
            return False
    except FileNotFoundError:
        return False


def isDraftComplete(fp):
    try:
        info = fetch_front_matter(fp)
        if not info["draft"]:
            return True
        else:
            return False
    except FileNotFoundError:
        return False


def isShare(fp):
    try:
        info = fetch_front_matter(fp)
        if info["share"]:
            return True
        else:
            return False
    except FileNotFoundError:
        return False


def fetch_destination(fp):
    info = fetch_front_matter(fp)
    return info["destination"]


def fetch_categories(fp):
    info = fetch_front_matter(fp)
    return info["categories"]


# 格式化tags函数
def frontmatter_format(fp):
    linelist = []
    # 原理是先按行读取原文件，在tags一行中替换
    # 同时利用之前读取到的front-matter 文件对tags下的一行添加文字
    # 最后得到修改后的数据，重新打开源文件，从头覆写一遍得到
    match_pattern = re.compile(r"tags")
    info = fetch_front_matter(fp)
    if isinstance(info["tags"], str):
        with open(fp, "r", encoding="utf-8") as f:
            while 1:
                line = f.readline()
                # 按行读取保存
                if not line:
                    print("read file End")
                    break
                elif match_pattern.search(line):
                    # 读取到tags一行
                    values = line.split(": ")[1].split(" ")
                    o_line = "tags: \n"
                    linelist.append(o_line)
                    for numb in range(0, len(values) - 1):
                        # 割分后最后一个可能是'\n'，跳过读取，最后判断
                        if len(values[numb]) != 0:
                            # 这里可能在最后一个标签后多了几个空格，判断读取
                            strline = "- " + values[numb] + "\n"
                            linelist.append(strline)
                    if values[-1] != "\n":
                        strline = "- " + values[-1]
                        linelist.append(strline)
                    continue
                linelist.append(line)
        with open(fp, "w", encoding="utf-8") as f:
            for i in linelist:
                f.write(i)


# 这是原本的函数，作用是移动文档
def main():
    """
    解析「本周事务」中笔记的front-matter信息
    根据 project-folder 和 status 等情况
    将已完成的内容转移到指定的 project子目录

    """
    # 获取obsidian 根目录
    vault = Obsidian()
    rootdir = vault.paths["vault"]
    # 这里必须是.md文件才有效，我这里出现了其他文件导致files出现了非目标文件
    # rootdir = 'D:\Document\Working'
    this_week = rootdir + "/01-Diary/本周事务"
    files = os.listdir(this_week)
    for file in files:
        if ".md" in file:
            name, ext = os.path.splitext(file)
            fp = os.path.join(this_week, file)
            # frontmatter_format(fp)
            # 先把自己的所有文档都格式化先,不移动它
            if isCompleted(fp):
                # print(fp)
                if isShare(fp):
                    target = fetch_categories(fp)(fp)
                    if len(target) > 1:
                        # 如果为空也不移动
                        if os.path.exists(target):
                            shutil.move(fp, target)
                            print(f"- [[{name}]]")
                else:
                    target = fetch_destination(fp)
                    if isShortLink(target):
                        # 如果是符合格式的短码，解析真实相对路径
                        target = shortLinkDecode(rootdir, target)
                    if len(target) > 1:
                        # 如果为空也不移动
                        base = os.path.join(rootdir, target)
                        if os.path.exists(base):
                            shutil.move(fp, base)
                            print(f"- [[{name}]]")


# 新函数：
# 在draft=false时移动文档，同时根据是否为share在目的地文档添加记录
# share为true,则移动到public中的对应的categories，同时在‘categories.md’中添加记录
# share为false，则根据destination移动到private中的位置。
# E:\VSCODE\Markdown\glossary\content\private\08-Assets\Scripts\auto_transfer.py

def update_link(name, categories, rootdir):
    file = f"{rootdir}/{categories}.md"
    relative_path = rootdir.split('content/')[1]
    # 如果原文件存在，则读取再添加
    try:
        with open(file, "r", encoding="utf-8") as f:
            line = f.readlines()
            if not line:
                print("read file End")
            new_line = f"[{name}]({rootdir}/{name}.md)\n"
            line.append(new_line)
        with open(file, "w", encoding="utf-8") as f:
            for i in line:
                f.write(i)
    except FileNotFoundError:
        with open(file, "w", encoding="utf-8") as f:
            f.write("---\n")
            f.write("obsidianUIMode: source\n")
            f.write("tags: \n")
            f.write("- tags\n")
            f.write(f"- {categories}\n")
            f.write(f"title: {categories}\n")
            f.write("---\n\n")
            f.write(f"[{name}]({relative_path}/{name}.md)" + "\n")


def mmmain():
    # 获取obsidian 根目录
    vault = Obsidian()
    rootdir = os.path.abspath(os.path.join(vault.paths["vault"], ".."))
    # rootdir = "E:\VSCODE\markdown\glossary\content\private
    # 这里必须是.md文件才有效，我这里出现了其他文件导致files出现了非目标文件
    this_week = rootdir + "/private/01-Diary/本周事务"
    files = os.listdir(this_week)
    for file in files:
        if ".md" in file:
            name, ext = os.path.splitext(file)
            fp = os.path.join(this_week, file)
            if isDraftComplete(fp):
                # print(fp)
                if isShare(fp):
                    categories = fetch_categories(fp)
                    target = rootdir + "/term/" + categories
                    if len(target) > 1:
                        # 如果为空也不移动
                        if os.path.exists(target):
                            shutil.move(fp, target)
                            print(f"- [[{name}]]")
                        else:
                            os.makedirs(target)
                            shutil.move(fp, target)
                            print(f"- [[{name}]]")
                        update_link(name, categories, target)

                else:
                    target = fetch_destination(fp)
                    if isShortLink(target):
                        # 如果是符合格式的短码，解析真实相对路径
                        target = shortLinkDecode(rootdir + "/private", target)
                    if len(target) > 1:
                        # 如果为空也不移动
                        base = os.path.join(rootdir, "private", target)
                        if os.path.exists(base):
                            shutil.move(fp, base)
                            print(f"- [[{name}]]")


def isShortLink(target):
    """
    shortlink：文件夹前面的唯一数字前缀的组合
    如 03-01 就代表是 03-Projects目录下的一个子目录，其名称前缀是01
    注意前缀不要超过2个字符，前缀使用-连接，这样可以得到类似MAC地址的效果
    """
    assert "-" in target, "destination is not a valid path!"
    parts = target.split("-")  # 一级目录必包含 -
    f2 = parts[1]
    if len(f2) > 2:
        # 一级目录即便是00-MOC，MOC的长度也是3
        return False
    else:
        return True


def shortLinkDecode(rootdir, target):
    parts = target.split("-")
    layers = []
    rdir = rootdir
    for p in parts:
        paths = os.listdir(rdir)
        fullname = []
        for path in paths:
            if path.startswith(f"{p}-"):
                sdir = os.path.join(rdir, path)
                if os.path.isdir(sdir):
                    # 避免以序号开头的md文件造成干扰
                    fullname.append(path)
                    rdir = sdir
        # 注意数字前缀必须是同目录中唯一的
        assert len(fullname) == 1, "Folder prefix short code error!"
        layers.append(fullname[0])
    full_path = "/".join(layers)
    return full_path


def test_shortLink():
    rootdir = r"X:\projects\working"
    # target = "03-6"
    target = "10-本科毕设"
    if isShortLink(target):
        target = shortLinkDecode(rootdir, target)
    print(target)


def test_move():
    # shutil能够把文件移动一个另一个文件夹内
    fp1 = r"C:\Users\sheldon\Desktop\细菌运动-4.gif"
    fp2 = r"C:\Users\sheldon\Desktop\新建文件夹"
    shutil.move(fp1, fp2)


def test_yaml_format():
    fp = r"E:\VSCODE\Python\Convector\test.md"
    frontmatter_format(fp)
    print("finish")


if __name__ == "__main__":
    mmmain()
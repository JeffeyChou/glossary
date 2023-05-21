import glob
import dateutil.parser
import frontmatter


def main():
    files = glob.glob('*.md')
    if files:
        files.remove('_index.md')
    for f in files:
        date = getDate(f).isoformat()
        print(date)


def getDate(md_file):
    with open(md_file) as f:
        md = frontmatter.load(f)
        dt = md.metadata['date']
        if type(dt) == str:
            # toml 格式下date被识别为字符串
            return dateutil.parser.parse(dt).date()
        else:
            # yaml 格式下date被识别为datetime，直接返回
            return dt.date()


if __name__ == '__main__':
    main()

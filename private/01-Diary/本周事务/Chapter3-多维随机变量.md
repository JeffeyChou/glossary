---
date: 2023-03-30 10:22:25
categories: Probability_and_Statistics 
destination: 
excerpt: 概率论第三章-多维随机变量
katex: true
obsidianUIMode: source
rating: ⭐⭐
draft: true
tags:  
- Probability_and_Statistics 
title: "Chapter3-多维随机变量"
share: true
---

# 多维随机变量及其分布
前面的部分我们都是讨论一维的随机变量，但是实际生活中，我们更常用的二维甚至更多维的随机变量，这就让我们把目光从一维开始扩展到更高维度。

- **多维随机变量**：如果 $(xi_{1}, \xi_{2}, \cdots ,\xi_{n})$ 是定义在*同一概率空间*$(\Omega, \mathcal{F},P)$ 上的 $n$ 个随机变量，称 $(xi_{1}, \xi_{2}, \cdots ,\xi_{n})$ 为 $n$ 维随机变量。
- **联合分布函数**： $n$ 维随机变量的JCDF为：
$$F(x_{1}, x_{2},\cdots, x_{n})=P\{ \xi_{1} \leqslant x_{1},\xi_{1} \leqslant x_{1},\cdots \xi_{1} \leqslant x_{1}\} ~~ (x_{1},x_{2},\cdots,x_{n}) \in \mathbb{R}^{n}$$
- **边缘分布函数**：由联合函数可以确定边缘分布函数，即固定其中一个变量使其取无穷后其他变量的分布函数。$F_{\xi_1}\left(x_1\right)=F\left(x_1,+\infty,+\infty, \cdots,+\infty\right) ~~~~~~ F_{\xi_1, \xi_2}\left(x_1, x_2\right)=F\left(x_1, x_2,+\infty, \cdots,+\infty\right)$

> 联合分布函数可以确定边缘分布函数，但是只有变量相互独立时，才可以由边缘分布函数导出联合分布函数，也就是直接相乘即可。

联合分布函数具有以下性质：
1. 单调不减性： $F(x,y)$ 分别对 $x, y$ 单调不减。
2. 有界性
3. 右连续性： $F(x, y)$ 分别关于 $x,y$ 右连续。
4. 相容性：对任意的$x_{1} < x_{2}, y_{1} <y_{2}$，有 $F(x_{2}, y_{2})-F(x_{2}, y_{1})-F(x_{1}, y_{2})+F(x_{1}, y_{1})$

## 二维离散型随机变量
设二维随机变量 $(\xi,\mu)$ 至多可取可列对数值：$(x_{i},y_{i}),i,j=1,2\cdots$, 有对应分布律：$P\{ \xi=x_{i}, \mu =y_{j} \}=p_{ij}$ ，其中$p_{ij}$ 满足非负性和归一性。对应的JCDF:$F(x, y)=P\{\xi \leq x, \eta \leq y\}=\sum_{x_i \leq x} \sum_{y_j \leq y} p_{i j}$

## 二维连续型随机变量
设二维随机变量 $(\xi, \eta)$ 的联合分布函数为 $F(x, y)$, 若存在非负函数 $f(x, y)$ 使得：对任意实数组 $(x, y)$, 有
$$
F(x, y)=\int_{-\infty}^x \int_{-\infty}^y f(u, v) d u d v
$$
称 $(\xi, \eta)$ 是二维连续型随机变量(Bivariate Continuous Random Variables), 称 $f(x, y)$ 为 $(\xi, \eta)$ 的联合概率密度函数(Joint Probability Density Function)
JPDF的性质：
1) $f(x, y) \geq 0$
2) $\int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} f(x, y) d x d y =1$.
3) 若 $f(x, y)$ 在 $(x, y)$ 的邻域内连续, 存在函数 $g(x)$ 可积 $\int_{-\infty}^{+\infty} g(x) d x<\infty$, 且 $|f(x, y)|<g(x)$ 则 $\frac{\partial^2 F(x, y)}{\partial x \partial y}=f(x, y)$
4) 若 $G \subset R^2$, 有 $P\{(\xi, \eta) \in G\}=\iint_G f(x, y) d x d y$
5) 关于 $\xi$ 和 $\eta$ 的边缘概率密度(Marginal Probability Density Function)为
$$
\begin{aligned}
& f_{\xi}(x)=\int_{-\infty}^{+\infty} f(x, y) d y \\
& f_\eta(y)=\int_{-\infty}^{+\infty} f(x, y) d x
\end{aligned}
$$

## 二维均匀分布
设 $G \subset R^2$, 面积为 $S(G)$, 若二维随机变量 $(\xi, \eta)$ 的联合概率密度为
$$
f(x, y)=\left\{\begin{array}{cc}
\frac{1}{S(G)} & (x, y) \in G \\
0 & \text { 其他 }
\end{array}\right.
$$
则称 $(\xi, \eta)$ 在 $G$ 上服从均匀分布. 记为 $(\xi, \eta) \sim U(G)$ 若 $(\xi, \eta) \sim U(G)$, 设 $D \subset G$,则
$$
P\{(\xi, \eta) \in D\}=\iint_D \frac{1}{S(G)} d x d y=\frac{S(D)}{S(G)}
$$



## 二维正态分布
设二维随机变量 $(\xi, \eta)$ 的联合概率密度为
$$
\begin{aligned}
f(x, y)= & \frac{1}{2 \pi \sigma_1 \sigma_2 \sqrt{1-r^2}} \exp \left\{-\frac{1}{2\left(1-r^2\right)}\left[\frac{\left(x-m_1\right)^2}{\sigma_1^2}\right.\right. \\
& \left.\left.-2 r \frac{\left(x-m_1\right)\left(y-m_2\right)}{\sigma_1 \sigma_2}+\frac{\left(y-m_2\right)^2}{\sigma_2^2}\right]\right\}, \quad(x, y) \in R^2,
\end{aligned}
$$
其中 $\boldsymbol{m}_1, \boldsymbol{m}_2, \sigma_1>0, \sigma_2>0$, 均为常数, $|\boldsymbol{r}|<\mathbf{1}$,
称( $(\xi, \eta)$ 服从二维正态分布, 记为
$$
(\xi, \eta) \sim N\left(m_1, \sigma_1^2 ; m_2, \sigma_2^2 ; r\right)
$$

## 二维两点分布

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/DIuZ69M.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">二维的两点分布
    </div>
</center>


# 随机变量的独立性
设 $(\xi, \eta)$ 是二维随机变量, 若对任意实数对 $(x, y)$ 均有
$$
P\{\xi \leq x, \eta \leq y\}=P\{\xi \leq x\} P\{\eta \leq y\}
$$
成立，称 $\xi$ 与 $\eta$ 相互独立（independent）.
对任意实数对 $(x, y)$, 随机事件 $\{\xi \leq x\} 、\{\eta \leq y\}$ 在给定概率空间上都 相互独立。
若 $\xi$ 与 $\boldsymbol{\eta}$ 不是独立的, 则称它们是相依 (dependent) 的.

1. (任意型). $\xi$ 与 $\eta$ 相互独立 $\Longleftrightarrow F(x, y)=F_{\xi}(x) F_\eta(y)$.对任意实数 $(x, y)$ 均成立.
2. (离散型) $\xi$ 与 $\boldsymbol{\eta}$ 相互独立$P\left\{\xi=x_i, \eta=y_j\right\}=P\left\{\xi=x_i\right\} P\left\{\eta=y_j\right\}$或$p_{i j}=p_i \cdot p \cdot j$ 对所有 $\left(x_i, y_j\right)$ 均成立
>若否定结论, 只需找到一个点 $p_{i j} \neq p i \cdot p \cdot j$

3. (连续型) $\xi$ 与 $\boldsymbol{\eta}$ 相互独立$f(x, y)=f_{\xi}(x) f_\eta(y)$。在平面上除去“面积”为 0 的集合外成立。

> 随机变量的独立性本质上是时间的独立性




# 随机变量的函数及其分布

二项分布具有可加性
泊松分布具有可加性
负二项分布具有可加性
几何分布加起来就是特殊的负二项分布


### 连续性随机变量函数的分布


#### 一维
当 $\xi$ 是连续型随机变量时, 已知 $\xi$ 的概率密度, 如何确定随机变 量 $\eta=g(\xi)$ 的分布?
1. 离散型：直接找到可能取值然后计算概率即可
2. 连续型：$$\begin{aligned}& F_\eta(y)=P\{g(\xi) \leq y\}=\int_{\{x \mid g(x) \leq y\}} f(x) d x \\ & f_{\xi}(y)=\left\{\begin{array}{cc}F_{\xi}^{\prime}(x), & f_{\xi}(y) \text { 的连续点; } \\0, & \text { 其他. }\end{array}\right.\end{aligned}$$
3. 奇异型：分布函数法

#### 二维
对于二维随机变量 $(\xi, \eta)$, 联合概率密度为 $f(x,y)$，如何确定随机变量 $\xi=g(\xi,\eta)$的分布？
1. 离散型：直接找到可能取值然后计算概率即可
2. 连续型：$$\begin{aligned}& F_\eta(z)=P\{g(\xi, \eta) \leq z\}=\int_{\{(x,y) \mid g(x,y) \leq z\}} f(x,y) d x dy \\ & f_{\xi}(z)=\left\{\begin{array}{cc}F_{\xi}^{\prime}(z), & f_{\xi}(y) \text { 的连续点; } \\0, & \text { 其他. }\end{array}\right.\end{aligned}$$
3. 奇异型：分布函数法


### 和的分布
**正态分布、二项分布具有可加性**

设随机变量 $\left(\xi_1, \xi_2\right)$ 的联合概率密度为 $f\left(x_1, x_2\right)$，则：
$$
\begin{align*}
F_{\xi_1+\xi_2}(x)=P\left\{\xi_1+\xi_2 \leq x\right\}&=\iint_{x_1+x_2 \leq x} f\left(x_1, x_2\right) d x_1 d x_{2} \\\\
&=\iint_{z \leqslant x} f(x_{1}, z-x_{1})dx_{1}dz \\\\
&=\int_{-\infty}^{x}[\int_{-\infty}^{+\infty}f(x_{1},z-x_{1})dx_1]dz
\end{align*}
$$
从而
$$
f_{\xi_1+\xi_2}(x)=F_{\xi_1+\xi_2}^{\prime}(x)=\int_{-\infty}^{+\infty} f\left(x_1, x-x_1\right) d x_1
$$
米似可得
$$
f_{\xi_1+\xi_2}(x)=\int_{-\infty}^{+\infty} f\left(x-x_2, x_2\right) d x_2
$$
若随机变量 $\xi_1, \xi_2$ 相互独立, 则
$$
\begin{aligned}
& f_{\xi_1+\xi_2}(x)=\int_{-\infty}^{+\infty} f_{\xi_1}\left(x_1\right) f_{\xi_2}\left(x-x_1\right) d x_1 \\
& f_{\xi_1+\xi_2}(x)=\int_{-\infty}^{+\infty} f_{\xi_1}\left(x-x_2\right) f_{\xi_2}\left(x_2\right) d x_2
\end{aligned}
$$

### 商的分布
设随机变量 $\left(\xi_1, \xi_2\right)$ 的联合概率密度为 $f\left(x_1, x_2\right)$, 则 $\eta=\frac{\xi_1}{\xi_2}\left(\xi_2 \neq 0\right)$ 的密度函数为
$$
f_{\frac{\xi_1}{\xi_2}}(x)=\int_{-\infty}^{+\infty}\left|x_2\right| f\left(x_2 x, x_2\right) d x_2
$$

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/yLqYENY.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">证明过程
    </div>
</center>

### 极值的分布

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/GGNN9WD.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">text title here...
    </div>
</center>
### 随机变量的一般变换
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/xLxKV2S.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">具有反函数情况下的一般变换
    </div>
</center>

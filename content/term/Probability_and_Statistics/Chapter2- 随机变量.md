---
date: 2023-03-21 14:39:48
categories: Probability_and_Statistics 
destination: 
excerpt: 
katex: true
obsidianUIMode: source
rating: ⭐⭐
draft: false
tags:  
- Probability_and_Statistics 
title: “Chapter2- 随机变量”
share: true
---


> [!question] 思考题
> 1. 随机变量的数学本质是什么
> 2. 分布函数的本质是什么
> 3. 分布函数可以计算哪些事件？
> 4. 分布函数的3条性质来源是什么？
> 5. 离散型随机变量的定义
> 6. 如何描述离散型随机变量的概率分布
> 7. 均匀分布、指数分布、正态分布的概率分布特征与应用场合？


# 2.1 随机变量及分布函数

## 随机变量
从数学上讲，随机变量是试验结果的一个实值函数。将求事件的概率转化成求随机变量 $\xi$ 在某个 $R$ 的子集上取值的概率。

**定义2.1.1** (随机变量) 
设 $(\Omega, \mathscr{F}, P)$ 是概率空间(Probability Space), $\xi(\omega)$ 是定义在 $\Omega$ 上的单值实函数, 若对任意实数 $x \in R$, 有
$$
\{\omega: \xi(\omega) \leq x\} \in \mathscr{F}
$$
称 $\xi(\omega)$ 是概率空间 $(\Omega, \mathscr{F}, P)$ *随机变量(Random Variable)*, 记为 $\xi$.

对一个随机变量，可以定义数学上的一些性质，如均值和方差。

若一个随机变量的值域为一个有限集合或最多为可数无限集合，则称这个随机变量为 **离散的**。

## 分布函数
**定义2.1.2** (分布函数) 
设 $\xi(\omega)$ 是定义在概率空间 $(\Omega, \mathscr{F}, P)$ 上的随机变量, $x$ 是任 意实数, 称函数
$$
F(x)=P\{\xi \leq x\}=P\{\omega: \xi(\omega) \leq x\}
$$
为随机变量 $\xi$ 的*分布函数(Cumulative Distribution Function)*, $F(x)$ 也 记为 $F_{\xi}(x)$.

> 从直观上讲，分布函数就是各种概率分布图像下的面积表示函数，其导数就表示落在该点的概率。

 分布函数具有以下性质：
1. 单调不降函数;
2. 右连续函数;
3. $0 \leqslant F(x) \leqslant1 \quad \lim_{x \rightarrow \infty} F(x) =0, \quad lim_{x \rightarrow \infty} F(x) =1$

特别的当 $X$ 为离散或者连续的情况下：
$$
F_X(x)=\mathrm{P}(X \leqslant x)= \begin{cases}\sum_{k \leqslant x} p_X(k), & \text { 若 } X \text { 离散的, } \\ \int_{-\infty}^x f_X(t) \mathrm{d} t, & \text { 若 } X \text { 连续的. }\end{cases}
$$

# 2.2 离散型随机变量
若一个随机变量的值域（随机变量的取值范围）为一个有限集合或至多为可数无限集合，且满足概率的非负性和可加性，那么称这个随机变量为 *离散的* 。

离散随机变量有一个**分布律(Distribution Law)**，它对于离散变量的每一个取值，给出一个概率:
$$P_{n}=P(\{\xi=x_{n}\}),\quad n=1, 2,\cdots$$

 > 后面为了方便起见，会把 “{}” 忽略掉，但是实际严格写作中还是要把花括号带上。
 
 分布律有两个直观描述：
- 质量分布图
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/SZvcq8L.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">质量分布图
    </div>
</center>

- 概率函数图
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/YnEPoF3.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">函数概率图
    </div>
</center>

## 伯努利随机变量
也称为0-1分布，它的分布列十分简单：
$$
P(\xi)=\left\{\begin{array}{lll}
p, & \text { 若 } & \xi=1 ， \\
1-p, & \text { 若 } & \xi=0 .
\end{array}\right.
$$

## 二项分布随机变量
它的随机变量仅关注 $n$ 重伯努利试验的结果发生次数。具有三个满足的特性：独立性、重复性、两个结果
$$
P_{n}(k)=C_{n}^{k}p^{k}(1-p)^{n-k}, \quad k=0,1,2,\cdots,n
$$
若随机变量 $\xi$ 的分布律为
$$
P(\xi=k)=C_n^k p^k(1-p)^{n-k}, k=0,1,2, \cdots, n .
$$
称随机变量 $\xi$ 服从二项分布(Binomial Distribution), 记为 $\xi \sim ~ B(n, p)$.



## 泊松随机变量
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/zE0D4l4.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">泊松分布的引出例子
    </div>
</center>

这样看，有没有导出 $e^{x}$ 的感觉，实际上，可以认为 泊松分布就是二项分布的极限分布。
$$
P(X_{n}=k)=C_{n}^{k}(\frac{\lambda}{n})^{k}(1- \frac{\lambda}{n})^{n-k}, k=0,1,\cdots,n
$$
在上式令 $n \rightarrow \infty$ ，得到了泊松分布：
$$
P(\xi=k)=\frac{\lambda^{k}}{k!} e^{-\lambda}, \quad  k=1,2,\cdots,n
$$
称 $\xi$ 服从参数为 $\lambda$ 的泊松分布(Poisson Distribution). 记为 $\xi \sim P(\lambda)$ 
(1) 当 $n$ 够大, $p$ 较小时 $($ 一般 $n>50, n p<5)$ 有
$$
b(k ; n, p)=C{ }_n^k p^k(1-p)^{n-k} \approx \frac{\lambda^k}{k !} e^{-\lambda} \text {. 其中 } \lambda=n p \text {. }
$$
## 超几何分布
模型设袋中有 $N$ 个球, 其中有 $M$ 个红球, $N-M$ 个白球, 从袋中任 取 $n$ 个球, 其中的红球个数 $\xi$ 的分布律为
$$
\begin{aligned}
& P\{\xi=m\}=\frac{C_M^m C_{N-M}^{n-m}}{C_N^n}, \\
& m=0,1,2, \ldots, l ; l=\min (n, M)
\end{aligned}
$$
称 $\xi$ 服从超儿何分布(Hyper geometric Distribution).

## 几何分布
不断的做二项试验直到第一次成功的概率分布列
$$
P\{\xi=k\}=p(1-p)^{k-1}, \quad k=1,2, \cdots
$$
称$\xi$服从几何分布(Geometric Distribution).

## 帕斯卡分布（负二项分布）
不断的做二项试验直到第$r$次成功，经历了$k$次的概率分布列
随机变量 $\xi$ 的分布列为
$$
P\{\xi=k\}=C_{k-1}^{r-1} p^r(1-p)^{k-r}, \quad k=r, r+1,\cdots
$$
称g服从负二项分布(Negative Distribution).


# 2.3 连续型随机变量
当一个随机变量$\xi$的取值变成连续，使用离散型变量常用的概率表达方式：分布列变得不太现实，所以需要定义连续型随机变量的分布函数 $F(X)$ 和概率密度函数 $f(x)$。
- **定义**(CDF, PDF): 设随机变量$\xi$的分布函数为$F(x)$，若存在非负可积函数$f(x)$，对于任意实数$x$ 均有：
$$F(x)=\int_{-\infty}^x f(t)\mathrm{d}t$$
那么称$F(x)$为随机变量$\xi$的累积分布函数(CDF)，而函数$f(x)$为$\xi$的概率密度函数(PDF)

PDF，具有跟概率的相似性质，如非负性，归一性；CDF，作为概率的累计和，具有绝对连续性，几乎处处可导。

> 值得注意的是, 因为分布函数的定义是一段区间内的概率取值可能性, 所以如果使用CDF的连续性对区间取极限话, 就会得到**连续型随机变量单点的取值概率为0的结论**

## 均匀分布
从名字上看，均匀分布就是在取值范围内均匀取到的概率分布。具体而言，如果一个PDF为：
$$f(x)=\begin{cases}
\frac{1}{b-a} \quad a < x < b \\
0 \quad \text{其他}
\end{cases}$$
那么称随机变量$\xi$在区间$(a,b)$上满足均匀分布，记为$\xi \sim U(a,b)$。
这种概率分布有如下特点：
- 随机变量$\xi$在$(a,b)$上取值的概率为1；
- 随机变量$\xi$落在$(a,b)$的子区间的概率与子区间位置无关，仅与测度成正比。

## 指数分布
DPF为：
$$f(x)=\begin{cases}
\lambda e^{-\lambda x} \quad & x >0 \\
0 \quad & x \leqslant 0
\end{cases}$$
其中$\lambda >0$，称随机变量服从参数为$\lambda$的指数分布，记为$\xi \sim E(\lambda)$ 
这种分布的特点是它具有无后效性，也就是类似于黄金分割的三个长度两两之比恒等。即：
$$P\{\xi>t+s |\xi > t\}=p\{\xi>s\}$$

## 正态分布
设随机变量 $\xi$ 的概率密度函数为
$$
\varphi\left(x ; \mu, \sigma^2\right)=\frac{1}{\sqrt{2 \pi} \sigma} e^{-\frac{(x-\mu)^2}{2 \sigma^2}}, x \in R
$$
其中 $\mu, \sigma(\sigma>0)$ 是常数, 则称随机变量 $\xi$ 服从参数为 $\mu, \sigma^2$ 的 正态分布(Normal Distribution)或高斯分布(Gaussian Distribution), 记为 $\xi \sim N\left(\mu, \sigma^2\right)$ 。
特别地, 当 $\mu=0, \sigma=1$ 时, 其概率密度函数为
$$
\varphi(x)=\varphi(x , 0,1)=\frac{1}{\sqrt{2 \pi}} e^{-\frac{x^2}{2}}, x \in R
$$
则称随机变量 $\xi$ 服从标准正态分布, 即 $\xi \sim N(0,1)$
- 参数 $\mu$ 确定了正态分布曲线的中心位置，称为**位置参数**
- 参数 $\sigma$ 确定了曲线的形状，值越大，曲线越平坦，称为**形状参数**

对于标准的正态分布，对应的CDF为：
$$\varPhi(x)=\int_{-\infty}^{x }\frac{1}{\sigma \sqrt{2 \pi }}e^{\frac{-(t-\mu)^{2}}{2\sigma^{2}}}$$
有了标准正态分布取值表，我们可以通过下面公式计算任意正态分布的概率。若随机变量 $\xi \sim N\left(\mu, \sigma^2\right)$, 则
$$
P\left\{x_1<\xi \leq x_2\right\}=\Phi\left(\frac{x_2-\mu}{\sigma}\right)-\Phi\left(\frac{x_1-\mu}{\sigma}\right)
$$
## $\Gamma$分布
设随机变量 $\xi$ 的概率密度函数为
$$
f(x)=\left\{\begin{array}{cc}
\frac{1}{\beta^{\alpha+1} \Gamma(\alpha+1)} x^\alpha e^{-\frac{x}{\beta}}, & x>0 ; \\
0, & \text { 其他. }
\end{array}\right.
$$
其中 $\alpha>-1, \beta>0$, 称 $\xi$ 服从 $\Gamma$ 分布（Gamma Distribution）, 记为
$$
\begin{aligned}
& \xi \sim \Gamma[\alpha, \beta] \\
& \Gamma \text { 函数定义如下 } \\
& \Gamma(\alpha)=\int_0^{+\infty} x^{\alpha-1} e^{-x} d x=2 \int_0^{+\infty} y^{2 \alpha-1} e^{-y^2} d y
\end{aligned}
$$
- 指数分布是特殊的 $\Gamma$ 分布 $\Gamma(1,\lambda)$
- 当 $\alpha$ 为正整数时， $\Gamma(\alpha, \beta)$ 是排队论中最常用的等待时间的分布——**Erlang（爱尔朗）分布**

## 混合（奇异）型随机变量
当CDF是由分段函数凑成时（甚至是离散型的和连续型的糅合在一起），称为混合型或奇异型随机变量

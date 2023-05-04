---
date: 2023-04-18 14:54:05
categories: Probability_and_Statistics 
destination: 
excerpt: 
katex: true
obsidianUIMode: source
rating: ⭐⭐
draft: false
tags:  
- Probability_and_Statistics
title: "Chapter4-随机变量的数字特征"
share: false
updated: 2023-04-21 10:51:32
---

# 4.1 数学期望、方差、矩

## 数学期望
- 离散型：设其分布律为： $P\{\xi=x_{i}\}=p_{i}$, 那么:$$E(\xi)=\sum\limits_{i=1}^{+\infty}x_{i}p_{i}$$
	称为 $\xi$ 的数学期望或者均值。它是所有可能取值对取值概率的加权平均值

- 连续型：已知概率密度为 $f(x)$， 若 $\int_{-\infty}^{+\infty}|x|f(x) \mathrm{d}x < +\infty$, 称 :$$E(\xi)=\int_{-\infty}^{+\infty}xf(x) \mathrm{d}x$$
    为 $\xi$ 的数学期望

- **一般随机变量的数学期望**：随机变量 $\xi$ 的分布函数为 $F(x)$, 若 $\int_{-\infty}^{+\infty}|x| d F(x)<+\infty$, 则
$$E(\xi)=\int_{-\infty}^{+\infty} x \mathrm{d}F(x)$$

### 一维随机变量的数学期望
$\xi \sim P(\lambda)$, 则 $\boldsymbol{E}(\xi)=\lambda$ ；
$\xi \sim B(n, p)$, 则 $E(\xi)=n p$;
$\xi \sim U(a, b)$, 则 $E(\xi)=(b+a) / 2$
$\xi \sim N\left(\mu, \sigma^2\right)$, 则 $E(\xi)=\mu$;
指数分布： $E(\xi)=\lambda^{-1}$
$\xi \sim \Gamma(\alpha, \beta)$, $E(\xi)=\frac{\alpha}{\beta}$
对数正态分布：$E(\xi)=10^{\mu + \frac{\omega^{2}}{2}\cdot \ln 10}$

### 一维随机变量函数的数学期望
设 $F_{\xi}(x)$ 是随机变量 $\xi$ 的分布函数, $g(x)$ 在 $R$ 上连续, 若
$$
\int_{-\infty}^{+\infty} g(x) \mid d F_{\xi}(x)<\infty
$$
则 $\eta=g(\xi)$ 的数学期望存在, 且
$$
E(\eta)=E[g(\xi)]=\int_{-\infty}^{+\infty} g(x) d F_{\xi}(x) 
$$
若 $\xi$ 是连续型随机变量, 则
$$
E(g(\xi))=\int_{-\infty}^{+\infty} g(x) F^{\prime}(x) d x=\int_{-\infty}^{+\infty} g(x) f(x) d x
$$
若 $\xi$ 是离散型随机变量, 则
$$
E(g(\xi))=\sum_{i=1}^{\infty} g\left(x_i\right) P\left\{\xi=x_i\right\}
$$

$$E[a \xi+b]=a E(\xi)+b, E(b)=b$$

## 方差

方差刻画了随机变量取值偏离数学期望的程度。

- 方差：随机变量 $\xi$ 的分布函数为 $F(x)$, 称：$$D(\xi)=E[\xi-E(\xi)^2]=\int_{-\infty}^{+\infty}[x-E(\xi)]^{2}\mathrm{d}F(x)$$
	为 $\xi$ 的方差，而 $\sigma(\xi)=\sqrt{D(\xi)}$ 为 $\xi$ 的标准差或均方差。

- 离散型的方差： 离散型随机变量的分布律为 $P\{\xi=x_{i}\}=p_{i}$, 那么方差有：$$D(\xi)=\sum\limits_{i=1}^{+\infty}[x_{i}-E(\xi)]^{2}p_{i}$$
- 连续型的方差： 对应概率密度为 $f(X)$, 那么有 $$D(\xi)=\int_{-\infty}^{+\infty}[x-E(\xi)]^2f_\xi(x)\mathrm{d}x$$
**方差的性质**
1. ： 如果 $E(\xi^{2})$ 存在，那么有： $$D(\xi)=E(\xi^{2})-[E(\xi)]^2$$
2. $$D(a \xi+b)=a^{2}D(\xi), D(b)=0$$

### 一些分布的方差
1. $\xi \sim P(\lambda)$, 则 $E(\xi)=\lambda, D(\xi)=\lambda$;
2. $\xi \sim B(n, p)$, 则 $E(\xi)=n p ; \quad D(\xi)=n p(1-p)$
3. $\xi \sim N\left(\mu, \sigma^2\right)$, 则 $E(\xi)=\mu$; $D(\xi)=\sigma^2 \quad$
5. 均匀分布 $E(\xi)=(b+a) / 2, D(\xi)=(b-a)^2 / 12$
6. 指数分布 $E(\xi)=\sqrt{D(\xi)}=\frac{1}{\lambda}$


# 多维随机变量的数字特征


# 条件数学期望与条件方差
本节讨论随机变量在给定另外一个随机变量之下的条件期望，可以将这个条件期望看成依赖于另一个随机变量的函数，因而是随机变量，那么就有相应的期望、方差、甚至分布等。



# 多维正态分布的随机变量


如何判断多维随机变量是否服从正态分布可能是个棘手的问题，但是幸运的是，我们能利用正态随机变量的线性变换不变性得到判断正态分布的充要条件：

> $（\xi_{1}, \xi_{2},\ldots, \xi_n)$ 服从 $n$ 维正态分布的充要条件是它的任意一个非零线性组合服从一维正态分布。

如果将线性组合当作线性变换，那么可以得到矩阵形式的表述：

> $C=\left(c_j\right)_{m \times n}$ 是任意矩阵, 则 $Y=C X$ 服从 $m$ 维正态分布 $N\left(C M, C \Sigma C^{\top}\right)$.


---
date: '2023-05-21 16:22:01'
categories: haha 
destination: 
excerpt: 
katex: true
obsidianUIMode: source
rating: ⭐⭐
tags:  
- RPS 
title: "推导RPS的包络"
share: false
---

根据 [@chen2023entropy](private/02-Reading/mdnotes/@chen2023entropy.md) ，RPS 熵的定义式为： 
$$
M(A_{ij}) = \frac{F(i)-1}{\sum\limits_{i=1}^{N}[ P(N,i)(F(i)-1)]}
$$

其中 $P(N,i)=\frac{N!}{(N-i)}!$ 是排列数, $F(i)$ 定义为： $F(i)=\sum\limits_{k=0}^{i}P(i,k)=\sum\limits_{k=0}^{i} \frac{i!}{	(i-k)!}$


根据 [@deng2022maximum](private/02-Reading/mdnotes/@deng2022maximum.md) ，最大的 RPS 熵的定义式为：
$$
H_{max-RPS}=\log_{2}\left( \sum\limits_{i=1}^{N} [ P(N, i) (F(i)-1)]\right)
$$

根据以上内容，推导最大 RPS 熵的数学解析形式。

---
# $F(i)$ 的推导

首先，根据 $F(i)$ 的定义式以及 $\Gamma$ 函数的定义式，有：$$
F(i)=e \Gamma(i+1,1)=\lfloor e (i)! \rfloor
$$
如果只考虑整数情况，可以对解析式进行向下取整。



![](private/08-Assets/Pasted%20image%2020230521174238.png)

- 证明过程：
$$
\sum\limits_{k=0}^n P(n,k)=n!\left(\sum\limits_{k=0}^n\frac{1}{(n-k)!}\right)=n!\left(\sum\limits_{k=0}^n\frac{1}{k!}\right)
$$
由不完全形式的 $\Gamma$ 函数的定义
$$
\Gamma(n+1,x)=\int_x^\infty t^n e^{-t}dt=n!e^{-x}\sum\limits_{k=0}^n\left(\frac{x^k}{k!}\right)
$$
在上式中令 $x=1$ ，得到：
$$
\Gamma(n+1,1)=\frac{n!}{e}\left(\sum_{k=0}^n\frac{1}{k!}\right)
$$
ying
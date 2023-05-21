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



# F (i)的推导

首先，根据 $F(i)$ 的定义式以及 $\Gamma$ 函数的定义式，有：
$$
F(i)=e \Gamma(i+1,1)=\lfloor e (i)! \rfloor(i \geqslant 1)
$$
如果只考虑整数情况，可以对解析式进行向下取整 (此时 $i\neq 0$ )。


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
因此， $F(i)$ 的解析结果为：
$$
F(i)=\sum\limits_{k=0}^i P(i,k)=e\times\Gamma(i+1,1)
$$
$F(i)$ 为整数，所以后者可以对 $\Gamma$ 函数取整数进一步化简公式， $\lfloor\Gamma(i+1,1)\rfloor=i!$

$P(N, i) (F(i)-1)|_{i=0}=-1$ 

---

# 排列数与 F (i)乘积的和的推导

首先定义求和函数 
S(n)=\sum\limits_{i=1}^{n}[ P(n,i)(F(i)-1) ] 
那么最大 RPS 熵可以改写成：
$$
H_{max-RPS}=\log_2S(n)
$$

首先从数值比较下 $F(i)$ 和 $S(n)$ 的数值差别：
[A000522 - OEIS](https://oeis.org/A000522)
| i             | 0         | 1   | 2      | 3      | 4       | 5       | 6       | 7        |
| ------------- | --------- | --- | ------ | ------ | ------- | ------- | ------- | -------- |
| $H_{max-RPS}$ | $-\infty$ | 0   | 3.3219 | 6.8704 | 10.9278 | 15.5406 | 20.6691 | 26.2491  |
| i!            | 1         | 1   | 2      | 6      | 24      | 120     | 720     | 5040         |
| $F(i)$        | 1         | 2   | 5      | 16     | 65      | 326     | 1957    | 13700    |
| $S(i)$        | 0         | 1   | 10     | 117    | 1948    | 47665   | 1667286 | 79777285 |
|               |           |     |        |        |         |         |         |          |

<!--Upload failed, remote server returned an error: Imgur is temporarily over capacity. Please try again later.-->
![](private/08-Assets/Pasted%20image%2020230521213626.png)

$$
\begin{align*}
S(n)&= \sum\limits_{i=1}^{n}[ P(n,i)(F(i)-1) ] \\
&= \sum\limits_{i=1}^{n}P(n,i)F(i) - \sum\limits_{i=1}^{n}P(n,i)\\
&= \sum\limits_{i=1}^{n}P(n,i)F(i) - e \Gamma(n+1, 1)+1\\
&= \sum\limits_{i=1}^{n} \frac{n!}{	(n-i)!} \lfloor e \times i! \rfloor - \lfloor e \times n! \rfloor+1\\
&= n! \times \lfloor e \sum\limits_{i=1}^{n} \frac{i! }{	(n-i)!} \rfloor - \lfloor e \times n! \rfloor+1
\end{align*}
$$


定义 $\theta(n)=\sum\limits_{i=1}^{n} \frac{i! }{	(n-i)!}$
画出 $\theta(n)$ 的散点图：

![](private/08-Assets/Pasted%20image%2020230521235951.png)

The given expression can be simplified as follows:

$$\begin{align*} \sum_{i=1}^{n} \frac{i!}{(n-i)!} &= \sum_{i=1}^{n} \frac{n!}{(n-i)!i!} \\
&= \sum_{i=1}^{n} \binom{n}{i} \cdot n! \\
&= n \cdot \sum_{i=1}^{n} \binom{n-1}{i-1} \cdot (n-1)! \\
&= n \cdot \sum_{k=0}^{n-1} \binom{n-1}{k} \cdot (n-1)! \\
&= n \cdot \sum_{k=0}^{n-1} \binom{n-1}{k} \cdot (n-1)! \\
&= n \cdot 2^{n-1} \cdot (n-1)! \\
&= n \cdot 2^{n-1} \cdot (n-1)! \\
\end{align*}$$

Therefore, the sum $\sum\limits_{i=1}^{n} \frac{i! }{(n-i)!}$ simplifies to $n \cdot 2^{n-1} \cdot (n-1)!$.
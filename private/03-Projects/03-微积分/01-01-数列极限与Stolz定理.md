---
title: 01-01-数列极限与Stolz定理
date: 2022-09-23 16:31:29
excerpt: 
tags: 
- 微积分
- Stolz定理
- 数列极限
rating: ⭐
status: complete 
destination: 03-03
share: false
obsidianUIMode: source
---

## 1.1 数列极限与Stolz定理
___
### 1. 数列极限
- **定义（数列极限）**：设{a$_n$}是一给定的数列，若对<u>任意</u>的$\varepsilon > 0$ , 都存在$N  ∈ \mathbb{N}$ ,使得对<u>任意</u>的 $n > N$ ，都有：
$$|a_n - a| < \varepsilon $$
则称数列{a$_n$}收敛于a，记为
$$
\lim _{n \rightarrow \infty} a_n=a, \quad \text { 或 } \quad a_n \rightarrow a \quad(n \rightarrow \infty) \text {. }
$$
___
- **定义（数列发散）**：设{a$_n$}是一给定的数列，若对<u>任意</u>的$a  ∈ \mathbb{R}$ ,都<u>存在</u>$\varepsilon_0 > 0$ , 使得<u>对任意</u>的 $N \in \mathbb{N}$ ，存在$n_N > N$，满足：
$$|a_n - a| \ge \varepsilon_0 $$
则称数列{a$_n$}为发散数列。
___
### 2. Stolz定理 
- **定义（Stolz定理）**：设 $\left\{b_n\right\}$ 为<u> 严格单调增加</u>的<u>正无穷大量</u>. 若
$$
\lim _{n \rightarrow \infty} \frac{a_{n+1}-a_n}{b_{n+1}-b_n}=\alpha
$$
其中 $\alpha$ 可以为实数、 $+\infty$ 或 $-\infty$ ，则
$$
\lim _{n \rightarrow \infty} \frac{a_n}{b_n}=\alpha .
$$
> [!tip] 证明思路
> 把原式极限形式写出，然后把分母去掉，最后累加再除以$b_(n+1)$，利用上下极限或者固定$N_1$取n的极限，得到结果，然后再讨论$\alpha \neq 0$
### 习题
- 例 (1.1.1)
利用定义证明: $\lim _{\underline{n \rightarrow \infty}} q^n=0$, 其中 $\underline{|q|<1}$.
> [!tip] 解题思路
> 对|q|=0和|q|在(0,1)进行分类讨论
___
- 例 (1.1.2)
利用定义证明: $\lim _{n \rightarrow \infty} \sqrt[n]{n}=1$.
> [!tip] 解题思路
> 一，令$\sqrt[n]{n}=1+\alpha_n$, 然后放缩使得$\alpha_n$小于某个数值，最后得到$\varepsilon$的取值范围
> 二，通过算术-几何平均值放缩
___
- 例 (1.1.3<u> Cauchy 命题</u>)
设 $a \in \mathbb{R}$. 若 $\lim _{n \rightarrow \infty} a_n=a$ ，则
$$
\lim _{n \rightarrow \infty} \frac{a_1+a_2+\cdots+a_n}{n}=a
$$
> [!tip] 解题思路
> 对$\alpha$的取值进行分类讨论，然后对固定的$N_1$有极限，再取$N_2$使得有$\varepsilon$，最后整理放缩得到上式的极限表达式。
___
例 (1.1.4)
设 $\lim _{n \rightarrow \infty} a_n=a \neq 0, \lim _{n \rightarrow \infty} b_n=\infty$. 证明: $\lim _{n \rightarrow \infty} a_n b_n=\infty$.
> [!tip] 解题思路
> 利用无穷大量的表达式解题，取$|b_n| \ge \frac{2G}{|a|}$，整理乘积即可. 
___
例 (1.1.5)
设
$$
a_n=1+\frac{1}{2}+\frac{1}{3}+\cdots+\frac{1}{n}
$$
证明:  $\left\{b_n\right\}$ 为正无穷大量.
> [!tip] 解题思路
> 利用$\frac{1}{n+1}+\frac{1}{n+2}+···+\frac{1}{2n} \gt \frac{1}{2}$解题
___
例 (1.1.6)
设 $k \in \mathbb{N}$. 求极限
$$
\lim _{n \rightarrow \infty} \frac{1^k+2^k+\cdots+n^k}{n^{k+1}}
$$
> [!tip] 解题思路
> 利用stolz定理和二项式展开
___
例 (1.1.7)
求极限
$$
\lim _{n \rightarrow \infty} (n!)^\frac {1}{n^2}
$$
> [!tip] 解题思路
> 利用对数恒等式把上述函数放到指数上，最后使用两次stolz定理即可

---
draft: false
date: 2023-05-05 10:29:01
categories: 
destination: 
excerpt: 
katex: true
obsidianUIMode: source
rating: ⭐⭐
tags:  
- 
title: "研讨一"
share: false
updated: 2023-05-05 12:21:22
---

若一$m$阶马尔科夫信源符号熵为$H(X_1...X_L)$,对其进行$t$元编码，则一定存在一种无失真编码方法，使得码率满足不等式

$$ H(X_{m+1}|X_m...X_1) + \epsilon \leqslant R < H(X_{m+1}|X_m...X_1) + (1+\frac{1}{c})\epsilon $$

证：设消息序列长度为$L$，信源符号$X_i \in (a_1, ..., a_n)$ 则对任意一条消息$A_{j_1...j_L}$，存在长度为$k_{j_1...j_L} , j_i \in {1,..,n}$的码字，使得

$$
-{log_2^{P(A_{j_1...j_L})} \over log_2^t} \leqslant k_{j_1...j_L} < 1 -

 {log_2^{P(A_{j_1...j_L})} \over log_2^t} 
$$


 将上式分别乘以$P(A_{j_1...j_L})$ 再求和，则有

$$
-\sum_{j_1=1}^{n}...\sum_{j_L=1}^{n} P(A_{j_1...j_L}){log_2^{P(A_{j_1...j_L})} \over log_2^t} \leqslant \sum_{j_1=1}^{n}...\sum_{j_L=1}^{n}

 P(A_{j_1...j_L})k_{j_1...j_L} < 1 - \sum_{j_1=1}^{n}...\sum_{j_L=1}^{n} P(A_{j_1...j_L}){log_2^{P(A_{j_1...j_L})} \over log_2^t}
$$


 对 $k_{j_1...j_L}$ 取数学期望就是 $\bar k, 故$


$$\frac{H(x_{1},\ldots x_{L})}{\log_{2}t }\leqslant \bar{K}  < 1 + \frac{H(x_{1},\ldots, x_{L})}{\log_{2}t}$$

$$\frac{H(x_{1}) + \ldots + (L-m)H(x_{m+1}|x_{m} \ldots)}{\log_{2}t}  \leqslant \bar{k } < 1 + \frac{H(x_{1}) + \ldots + (L-m)H(x_{m+1}|x_{m} \ldots)}{\log_{2}t}$$

由 $R=\frac{\bar{k}}{L}$ 知，令 $H(x_{1}) + H(x_{m}|x_{m-1} \ldots x_{1})\ldots -mH(x_{m+1}|x_{m} \ldots x_{1})=c$ ，则：
$$\frac{c}{L} + H(x_{m+1} | x_{m} \ldots x_{1}) \leqslant R < \frac{c+1}{L} +  H(x_{m+1} | x_{m} \ldots x_{1})$$

无失真：

Kraft定理

$m$ 元长度为 $k_i,i \in {1,..,n}$  的异前置码存在的充要条件为：
$$\sum\limits_{i=1}^{n}m^{-k_i} \leqslant 1 $$

充分性：

若$$\sum\limits_{i=1}^{n}m^{-k_i} \leqslant 1 $$成立，则必有$$\sum\limits_{i=1}^{n}m^{N-k_i} \leqslant m^N $$成立，其中N是大于n的一个值。那么我们总可以把第N级上的树枝分成n组，各组从第N级开始删除$m^{N-k_i}$个树枝。相对于N级满树而言，等于删除了所有可能的$k_i$级节点的$\frac{1}{m^{ki}}=m^{-k_i}$。在该组中以第k级的节点作为终节点，就构造好了第i个码字。对所有的n个码字均如法炮制，则总共删除了所有$m^N$个节点中的$\sum\limits_{i=1}^{n}m^{-k_i}$。由于$\sum\limits_{i=1}^{n}m^{-k_i} ≤1$，于是就构造了一个异前置码。

设第$j_{1}\ldots j_{L}$个码字的长度为$k_{j_{1}\ldots j_{L}}$,

$$\begin{align*}
k_{j_{1}\ldots j_{L}} &\geqslant - \frac{\log_{2} P(A_{j_{1}\ldots j_{L}})}{\log_{2} t} \\\\
\Rightarrow t^{k_{j_{1}\ldots j_{L}}} &\geqslant \frac{1}{P(A_{j_{1}\ldots j_{L}})} \\\\
\Rightarrow P(A_{j_{1}\ldots j_{L}}) & \geqslant t^{-k_{j_{1}\ldots j_{L}}}
\end{align*}$$

求和即得结果

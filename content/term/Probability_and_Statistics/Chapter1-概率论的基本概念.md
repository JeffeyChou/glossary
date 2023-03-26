---
cover: 
categories: Probability_and_Statistics
date: 2023-03-02 10:42:39
destination: 
excerpt: 完成了概率论的第一章的内容
katex: true
obsidianUIMode: source
rating: ⭐
draft: false
tags:  
- Probability_and_Statistics
title: Chapter1-概率论的基本概念
share: true
updated: 2023-03-14 17:57:42
---

> [!question] 本节需要考虑的问题 
> 	1. 随机试验具有什么特征？
> 	2. 在一个随机试验中，什么是随机事件，有什么关系？
> 	3. 样本空间概念，以及它引用的作用？
> 	4. 时间的运算就仅仅是集合的运算么，还需要注意什么？
> 	5. 频率、古典概率、几何概率有哪些数学上的共性？
> 	6. 概率的数学本质是一个什么函数？它的定义域和值域分别是什么？
> 	7. 为什么要定义 $\sigma$ 代数和可测空间？
> 	8. 为什么要把概率称为概率测度？
> 	9. 概率的公理化定义有什么作用？ 
> 	10. 条件概率是概率么？怎么理解条件概率？
> 	11. 与条件概率有关的有哪几个重要概率公式？

****

# 1.1 随机事件与样本空间

## 随机现象&随机事件


- **随机现象(random phenomenon)**：一次观察时不可事先预言其结果，而进行<u>大量次重复观察</u>时，结果却呈现某种<u>规律</u>的<u>非确定性现象</u>.（不可事前预言）。

- **统计规律(statistical law)**：该随机现象的某种规律。

- **随机试验(random experiments)**：对随机事件所进行的观察和实验。具有如下特征：
    - 可重复性
    - 结果明确性
    - 不可预言性

- **随机事件(random events)**： 在<u>一定条件下基于一定的试验目的</u>进行试验，称试验中<u>每一个可能发生也可能不发生的事情</u>为随机事件，简称事件(events).
    - 通常用大写字母 $A , B , C$ 以及 $A_{1} , A_{2}, \cdots A_n$ 等表示事件

- **基本事件(elementary event)**： 在<u>一次试验中必发生一个且仅发生一个</u>的最简单事件.

- **复合事件(compound event)**： 由若干基本事件组合而成的事件.

- **必然事件(certain event)**：做一次随机试验必定发生的事件.
    - 记为 $\Omega$

  - **不可能事件(impossible event)**：做一次随机试验必定不发生的事件.
      - 记为 $\varPhi$ 

****

## 样本空间

将用于试验的每一个基本事件，使用仅包含一个元素 $\omega_{i}$ 的单点集合表示，所有基本事件对应的元素全体组成的集合
$$
\Omega = \{ \omega_{1}, \omega_{2} , \cdots \}
$$
称为试验的 **样本空间(sample space)** ，样本空间中的元素称为 **样本点(sample point)** 

样本空间与试验目的有关。

此时，复合事件对应样本空间的子集，必然事件对应样本空间本身 $\Omega$ ，不可能事件对应空集 $\varPhi$ 

- 从属关系 $\omega \in A$
	在一次试验中，如果实验结果 $\omega$ 是集合 $A$ 中的元素，即 $\omega \in A$ ，则称事件 $A$ 发生。否则称事件 $A$ 没有发生。

- 包含关系 $A \subset B$ 
	事件 $A$ 发生，必然导致事件 $B$ 发生。称事件 $B$ 包含事件 $A$ ，或 $A$ 是 $B$ 的子事件。
	如果两个事件相互包含，则称两事件相等。

- 和关系 $A \cup B$
	表示事件 {$A$ 与 $B$ 至少有一个发生} 

- 积事件 $A \cap B \ or \ AB$  
	表示 事件 $A, B$ 同时发生。

- 互斥事件 $AB= \varPhi$ 
	在一次试验中 $A, B$ 不可能同时发生。<u>同一试验的基本事件互不相容</u>

- 对立事件(逆事件)
    若 $AB=\varPhi$ ，且 $A \cup B = \Omega$ ，称 $A, B$ 互为逆事件。
    记为 $B=\bar{A}$ 

- 差事件 $A-B$ 
	$A-B = \{\omega | \omega \in A \ \wedge \omega \notin B\}$
 	表示事件 $A$ 发生且 $B$ 不发生

****

# 1.2 概率的意义及计算
- 概率：对随机事件发生可能性大小的客观度量
    - 事件 $A$ 出现的概率记为 $P(A)$ 
- 主观概率：某人对特定事件发生可能性的度量
- 频率：在相同条件下，进行 $n$ 次试验，事件 $A$ 发生了 $k$ 次，称比值 $f_{n}(A) =\frac{k}{n}$ 为事件 $A$ 发生的频率。
    - 频率在一定条件上反映了事件发生可能性的大小

## 古典概率
设 $E$ 是一个随机试验，若它满足以下两个条件：
	1. 仅有有限多个基本事件 **有限性**
	2. 每个基本事件发生的可能性相等 **等可能性**
则称 $E$ 为古典概型实验

- 古典概率：$P(A)=\frac{\text{A所包含的基本事件个数}}{\text{基本事件总数}}$ 


## 几何概率
几何概率是对古典概率中样本空间的有限性进行推广。等可能性->均匀性
随机试验的样本空间具有类似“等可能性”的均匀分布，但是样本点为不可数无穷多个。
- 几何概率：$P(A) =\frac{ \mu (A)}{\mu(\Omega)}$ 概率与形状、位置等均无关，只与其面积有关。$\mu$ 的度量为长度、面积、角度等。

****

# 1.3 概率模型与公理化结构
- 概率：以事件为自变量的实值函数。
- 概率的定义域：可确定概率的事件类（样本点个数无限情况的下，根据测度论，不可测子集无法计算其几何度量，所以需要分类）
    - 对逆运算封闭（所以空集也在里面、对并运算封闭、含$\Omega$ 。
    - 定义该集族为概率的定义域，称为 $\sigma-$ 代数
- **可测空间**：样本空间 $\Omega$ 和 $\sigma$ 代数的二元体 $(\Omega, \sigma)$ 称为可测空间（measurable space)
- **概率**：设 $(\Omega, F)$ 是一个可测空间。对定义在 $F$ 上的实值集函数 $P(A)$ 满足：非负性、归一性、完全可加性，那么称 $P$ 是$(\Omega,F)$ 上的概率。三元体 $(\Omega, F, P)$ 称为**概率空间**。

## 常见的概率空间
1. Bernoulli概率空间
取 $F=\{\Phi, A, \bar{A}, \Omega\}$ ,其中 $A$ 是 $\Omega$ 的非空真子集，任取两个正数满足 $p + q=1$ 另：
$$
P(\Phi) = 0 \ ,P(A)=p\ , P(\bar{A})=q\ , P(\Omega) = 1
$$
则 $(\Omega, F, P)$ 是一个bernoulli概率空间。

2. 有限概率空间
样本空间是有限集，事件体 $F=2^{\Omega}$ ，定义概率满足：
$$
P(A) = \sum\limits_{\omega_{i} \in A} P_{i} \quad \sum\limits P_{i} = 1 
$$
则 $(\Omega, F, P)$ 是一个概率空间。

3. 离散概率空间
同有限概率空间类似，只不过样本空间取为可数集。

4. 一维几何概率空间
样本空间 $\Omega$ 为 $(-\infty, + \infty)$ 中的弗雷尔点集，具有正的有限的勒贝格测度 $\mu(\cdot)$ ，事件体 $F$ 取作 $\Omega$ 中的弗雷尔点集类。取 $P(A)= \frac{\mu(A)}{\mu(\Omega)}$ 

### 贝特朗悖论中的三种情形中的概率空间：
1. $\Omega$: 圆中所有的点； $P=\frac{1}{4}$ ；$F:(\Phi, \Omega , A , \bar{A})$ 
    1. $A$ ：落点 $P$ 在小圆 $C_{1}$ 内；$\bar{A}:$ 落点 $P$ 不在小圆 $C_{1}$ 内。
2. $\Omega$: 圆边上的所有点； $P=\frac{1}{3}$ ；$F:(\Phi, \Omega , A , \bar{A})$ 
    1. $A$ ：落点 $P$ 在 $\overset{\LARGE{\frown}}{AB}$ 内；$\bar{A}:$ 落点 $P$ 不在 $\overset{\LARGE{\frown}}{AB}$ 内。
3. $\Omega$: 直径$EF$上的所有点； $P=\frac{1}{2}$ ；$F:(\Phi, \Omega , A , \bar{A})$ 
    1. $A$ ：落点 $P$ 在线段 $GH$ 内；$\bar{A}:$ 落点 $P$ 不在线段 $GH$ 内。

## 概率性质
1. $P(\Phi)=0$
2. 有限可加性：$A_{i} \bigcap A_{j} = \Phi,(j \neq j), \text{则} P(\bigcup_{i=1}^{n} A_{i})= \sum\limits P(A_{i})$ 
3. 概率连续性： 若 $A_1 \supset A_2 \supset \cdots$, 且 $\bigcap_{n=1}^{\infty} A_n=\Phi$, 则 $\lim _{n \rightarrow \infty} P\left(A_n\right)=0$.
4. 多除少补性: 设 $A_i \in \mathscr{F}, i=1,2, \cdots, n$, 有
$$
P\left(\bigcup_{i=1}^n A_i\right)=\sum_{i=1}^n P\left(A_i\right)-\sum_{1 \leq i < k \leq n} P\left(A_i A_k\right)+\cdots+(-1)^{n+1} P\left(\bigcap_{i=1}^n A_i\right)
$$


## 利用事件法解题

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/vlS9gi7.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">事件法求解过程
    </div>
</center>


****

# 1.4 条件概率



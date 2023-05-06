---
obsidianUIMode: source
tags:  
- Gram-Schmidt
title: Gram-Schmidt
---
Gram-Schmidt正交化是一种将线性无关的向量组转化为一组正交向量组的方法。其计算过程如下：

假设有一组线性无关的向量组 $v_1, v_2, \cdots, v_n$，则可以通过以下步骤将其转化为一组正交向量组 $u_1, u_2, \cdots, u_n$：

1.令 $u_1 = v_1$。

2.令 $u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1$。

3.令 $u_3 = v_3 - \frac{\langle v_3, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 - \frac{\langle v_3, u_2 \rangle}{\langle u_2, u_2 \rangle} u_2$。

4.以此类推，令 $u_k = v_k - \sum_{j=1}^{k-1} \frac{\langle v_k, u_j \rangle}{\langle u_j, u_j \rangle} u_j$。

最终得到的向量组 $u_1, u_2, \cdots, u_n$ 是一组正交向量组。

下面给出一个例子：

假设有向量组 $v_1 = (1, 1, 0), v_2 = (0, 1, 1), v_3 = (1, 0, 1)$，则可以通过Gram-Schmidt正交化得到一组正交向量组。

首先，令 $u_1 = v_1 = (1, 1, 0)$。

然后，计算 $u_2$：

$$
\begin{aligned}
u_2 &= v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 \\
&= (0, 1, 1) - \frac{\langle (0, 1, 1), (1, 1, 0) \rangle}{\langle (1, 1, 0), (1, 1, 0) \rangle} (1, 1, 0) \\
&= (0, 1, 1) - \frac{1}{2} (1, 1, 0) \\
&= (-\frac{1}{2}, \frac{1}{2}, 1)
\end{aligned}
$$

最后，计算 $u_3$：

$$
\begin{aligned}
u_3 &= v_3 - \frac{\langle v_3, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 - \frac{\langle v_3, u_2 \rangle}{\langle u_2, u_2 \rangle} u_2 \\
&= (1, 0, 1) - \frac{\langle (1, 0, 1), (1, 1, 0) \rangle}{\langle (1, 1, 0), (1, 1, 0) \rangle} (1, 1, 0) - \frac{\langle (1, 0, 1), (-\frac{1}{2}, \frac{1}{2}, 1) \rangle}{\langle (-\frac{1}{2}, \frac{1}{2}, 1), (-\frac{1}{2}, \frac{1}{2}, 1) \rangle} (-\frac{1}{2}, \frac{1}{2}, 1) \\
&= (1, 0, 1) - \frac{1}{2} (1, 1, 0) - \frac{1}{2} (-\frac{1}{2}, \frac{1}{2}, 1) \\
&= (\frac{1}{2}, -\frac{1}{2}, \frac{1}{2})
\end{aligned}
$$

因此，得到的一组正交向量组为 $u_1 = (1, 1, 0), u_2 = (-\frac{1}{2}, \frac{1}{2}, 1), u_3 = (\frac{1}{2}, -\frac{1}{2}, \frac{1}{2})$。


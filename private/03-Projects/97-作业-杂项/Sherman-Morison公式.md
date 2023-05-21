---
title: Sherman-Morison公式
date: 2022-10-28 08:50:00
excerpt: 
tags: 
- Sherman-Morison公式 
- 矩阵求逆 
- 高等代数
rating: ⭐
status: complete 
destination: 03-97
share: false
obsidianUIMode: source
---
如果矩阵 $\boldsymbol{A}$ 非奇异, $\boldsymbol{u}$ 和 $\boldsymbol{v}$ 为列向量, 满足 $1+\boldsymbol{v}^{\top} \boldsymbol{A}^{-1} \boldsymbol{u} \neq 0$, 那么 $\boldsymbol{A}+\boldsymbol{u} \boldsymbol{v}^{\top}$ 非奇异, 其逆矩阵可以用 $\boldsymbol{A}^{-1}$ 表示
$$
\left(\boldsymbol{A}+\boldsymbol{u} \boldsymbol{v}^{\top}\right)^{-1}=\boldsymbol{A}^{-1}-\frac{\left(\boldsymbol{A}^{-1} \boldsymbol{u}\right)\left(\boldsymbol{v}^{\top} \boldsymbol{A}^{-1}\right)}{1+\boldsymbol{v}^{\top} \boldsymbol{A}^{-1} \boldsymbol{u}}
$$
---
### 推导过程
$(\Leftarrow)$ To prove that the backward direction $1+v^{\top} A^{-1} u \neq 0 \Rightarrow A+u v^{\top}$ is invertible with inverse given as above) is true, we verify the properties of the inverse. A matrix $Y$ (in this case the right-hand side of the Sherman-Morrison formula) is the inverse of a matrix $X$ (in this case $A+u v^{\top}$ ) if and only if $X Y=Y X=I$.
We first verify that the right hand side $(Y)$ satisfies $X Y=I$.
$$
\begin{aligned}
X Y &=\left(A+u v^{\top}\right)\left(A^{-1}-\frac{A^{-1} u v^{\top} A^{-1}}{1+v^{\top} A^{-1} u}\right) \\
&=A A^{-1}+u v^{\top} A^{-1}-\frac{A A^{-1} u v^{\top} A^{-1}+u v^{\top} A^{-1} u v^{\top} A^{-1}}{1+v^{\top} A^{-1} u} \\
&=I+u v^{\top} A^{-1}-\frac{u v^{\top} A^{-1}+u v^{\top} A^{-1} u v^{\top} A^{-1}}{1+v^{\top} A^{-1} u} \\
&=I+u v^{\top} A^{-1}-\frac{u\left(1+v^{\top} A^{-1} u\right) v^{\top} A^{-1}}{1+v^{\top} A^{-1} u} \\
&=I+u v^{\top} A^{-1}-u v^{\top} A^{-1}
\end{aligned}
$$
To end the proof of this direction, we need to show that $Y X=I$ in a similar way as above:
$$
Y X=\left(A^{-1}-\frac{A^{-1} u v^{\top} A^{-1}}{1+v^{\top} A^{-1} u}\right)\left(A+u v^{\top}\right)=I
$$
(In fact, the last step can be avoided since for square matrices $X$ and $Y, X Y=I$ is equivalent to $Y X=I$.)
$(\Rightarrow)$ Reciprocally, if $1+v^{\top} A^{-1} u=0$, then via the matrix determinant lemma, $\operatorname{det}\left(A+u v^{\top}\right)=\left(1+v^{\top} A^{-1} u\right) \operatorname{det}(A)=0$, so $\left(A+u v^{\top}\right)$ is not invertible.
[Source](https://en.wikipedia.org/wiki/Sherman%E2%80%93Morrison_formula)

---
title: Nabla算子-梯度、旋度、散度
date: 2022-11-09 12:48:57
excerpt: 
tags: 
- Nabla算子
- 梯度
- 旋度
- 散度
rating: ⭐
status: complete 
destination: 03-97
share: false
obsidianUIMode: source
---
### 梯度(Gradient)
梯度的本意是一个向量 (矢量)，表示某一函数在该点处的方向导数沿着该方向取得最大值，即函数在该点处沿着该方向（此梯度的方向）增长最快。
$$
\operatorname{grad} f=\nabla f=\frac{\partial f}{\partial x} \vec{i}+\frac{\partial f}{\partial y} \vec{j}+\frac{\partial f}{\partial z} \vec{k} .
$$
### 散度(Divergence)
散度 (divergence) 可用于表征空间各点矢量场发散的强弱程度，物理上，散度的意义是场的有 源性。当div $F>0$ ，表示该点有散发通量的正源 (发散源)；当div $F<0$ 表示该点有吸收通量的负源 (洞) ； 当div $F=0$ ，表示亥点无源。
$$
F(x, y, z)=F_x(x, y, z) \vec{i}+F_y(x, y, z) \vec{j}+F_z(x, y, z) \vec{k} .
$$
div $\vec{F}=\nabla \cdot \vec{F}=\frac{\partial F_x}{\partial x}+\frac{\partial F_y}{\partial y}+\frac{\partial F_z}{\partial z}$
### 旋度(Curl)
$$
F(x, y, z)=F_x(x, y, z) \vec{i}+F_y(x, y, z) \vec{j}+F_z(x, y, z) \vec{k} .
$$
$$
\nabla \times F=\left \| \begin{array}{ccc}
\vec{i} & \vec{j} & \vec{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{array}\right \|
$$
$\operatorname{curl} \boldsymbol{F}=\left(\frac{\partial F_z}{\partial y}-\frac{\partial F_y}{\partial z}\right) \hat{\boldsymbol{i}}+\left(\frac{\partial F_x}{\partial z}-\frac{\partial F_z}{\partial x}\right) \hat{\boldsymbol{j}}+\left(\frac{\partial F_y}{\partial x}-\frac{\partial F_x}{\partial y}\right) \hat{\boldsymbol{k}}$
### 梯度的散度
$$
\nabla \cdot(\nabla u)=u_{x x}+u_{y y}+u_{y y}=\Delta_3 u .
$$
### 参考资料：
[^1]: [高等数学（十五）Nabla算子用法-梯度旋度散度](https://zhuanlan.zhihu.com/p/146686021)
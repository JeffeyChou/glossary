---
title: 物创13-ponyos heat tube
date: 2022-12-07 10:08:39
excerpt: 
tags: 
- 物创 
- Convection 
rating: ⭐
status: complete 
destination: 03-97 
share: false
obsidianUIMode: source
---

# An Open Oscillatory Heat Pipe Steam-Powered Boat

Reed, J.G., Tien, C.L., 1987. Modeling of the Two-Phase Closed Thermosyphon. Journal of Heat Transfer, 无 109, 722–730. [https://doi.org/10.1115/1.3248150](https://doi.org/10.1115/1.3248150)

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/fCIud8p.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Fig.1 A two-phase closed thermosyphon | Modeling of the Two-Phase Closed Thermosyphon
    </div>
</center>


两相封闭虹吸热管通常由一个密封容器组成。容器被抽空，并填充了足够的液体以使芯材完全饱和。如图1所示，热管由三个不同的区域组成：蒸发器或容器的增热区域，冷凝器或排热区域，以及绝热或等温区域。当蒸发器区域暴露在高温下时，工作液体被加热，直到其蒸发形成气泡。在此过程中，由于重力和和压力的影响，温度较高，密度较小的高温液体会因此上升到容器上部，而温度较低，密度较大的冷液体则会借此下降；此外，由于底部是液封的，在此过程中也存在热传递，结果表现为随着实验进行烧杯处液体会缓慢升温。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/En40z9h.gif">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Fig.2 实验用装置，图中出现了自然对流 | 周杰锋摄
    </div>
</center>

在图二中可以看到明显的冷热水对流情况，注意到上管壁有部分小气泡，这里认为是水中溶解的液体在高温下被重新释放出来并附着在管壁上。

在两相封闭式热虹吸管中，当系统中的水变得过热并达到沸点时，就会发生间歇泉沸腾现象。这导致水变成蒸汽，然后上升并在系统内产生压力。随着压力的增加，它最终会达到超过间歇泉管道强度的程度，导致蒸汽喷发并从间歇泉喷出。

这个过程也有热虹吸效应，热虹吸效应是由于温度差异引起的密度差异导致的流体（在本例中为水）的自然循环。在两相封闭热虹吸系统中，系统底部的热水密度低于顶部的冷水，导致水上升并在系统内形成循环流。这种流动有助于分配热量并保持系统温度，进而有助于使水保持过热状态并维持间歇泉沸腾现象。


### 数学模型

Jouhara, H., Fadhl, B., Wrobel, L.C., 2016. Three-dimensional CFD simulation of geyser boiling in a two-phase closed thermosyphon. International Journal of Hydrogen Energy, 无 41, 16463–16476. [https://doi.org/10.1016/j.ijhydene.2016.02.038](https://doi.org/10.1016/j.ijhydene.2016.02.038)

根据上面论文给出采用质量连续性、动量和能量的控制方程描述热虹吸管内工质的运动。

#### VOF模型（体积分数方程）
通过对流体应用质量守恒，连续性方程应该具有如下形式：
$$\nabla \cdot (\rho \boldsymbol{V})=- \frac{\partial{\rho}}{\partial{t}} \tag{1.1}$$
式中 $\rho$ 为流体密度， $\boldsymbol{V}$ 为速度矢量，$t$ 为时间。

对上述方程其中的一个相的体积分数的求解可以用来确定相与相之间的界面。因此，对第二个相(l)的VOF模型的连续性方程可以表示为：
$$\nabla \cdot\left(\alpha_l \rho_l \mathbf{V}\right)=-\frac{\partial}{\partial t}\left(\alpha_l \rho_l\right)+S_{m}\tag{1.2}$$
式中：$S_{m}$ 为质量源项，用于计算蒸发和冷凝过程中的质量转移。

上面所示的连续性方程可以称为体积分数方程，由于初生相的体积分数是基于以下约束确定的
$$\sum_{l=1}^n \alpha_l=1\tag{1.3}$$
因此对于初生相来说这个关系式将无法求解.

当体积胞元未被初生相(v) 或者第二相(l)完全占据时，里面就存在这两个相的混合物。定义混合物的密度为体积分数平均密度：
$$\rho = \alpha_{l}\rho_{l} + (1-\alpha_{l})\rho_{v}\tag{1.3}$$

#### VOF模型（动量方程）
流体中的作用力考虑为重力、压力、摩擦力和表面张力。为了考虑表面张力沿两相界面的影响，在动量方程中加入了[Brackbill等](http://refhub.elsevier.com/S0360-3199(15)31917-0/sref22)提出的连续表面力( CSF )模型:
$$\mathbf{F}_{\mathrm{CSF}}=2 \sigma \frac{\alpha_l \rho_l C_v \nabla \alpha_v+\alpha_v \rho_v C_l \nabla \alpha_l}{\rho_l+\rho_v}\tag{2.1}$$
其中 $\sigma$ 为表面张力系数，$C$ 为表面曲率。通过考虑上述作用力，VOF模型的动量方程取如下形式(2.2):
$$\begin{aligned}
\frac{\partial}{\partial t}(\rho \mathbf{V})+\nabla \cdot\left(\rho \mathbf{V V}^{\mathrm{T}}\right)= & \rho \mathbf{g}-\nabla p+\mathbf{F}_{\mathrm{CSF}} \\
&+\nabla \cdot\left[\mu\left(\nabla \mathbf{V}+(\nabla \mathbf{V})^{\mathrm{T}}\right)-\frac{2}{3} \mu(\nabla \cdot \mathbf{V}) \mathrm{I}\right] \\
\end{aligned}$$
其中 $g$ 为重力加速度，$p$ 为压力，$I$ 为单位张量。动量方程通过密度和黏度的物理特性取决于所有相的体积分数。因此，动力粘度 $\mu$ 由以下确定：
$$\mu=\alpha_l \mu_l+\left(1-\alpha_l\right) \mu_v\tag{2.3}$$
单个动量方程通过计算域求解，计算得到的速度在各相之间共享

#### VOF模型（能量方程）
对应的能量形式有如下方程：
$$\frac{\partial}{\partial t}(\rho E)+\nabla \cdot(\rho E \mathbf{V})=\nabla \cdot(k \nabla T)+\nabla \cdot(p \mathbf{V})+S_E\tag{3.1}$$
式中：$S_{E}$为能量源项，用于计算蒸发和冷凝过程中的传热。VOF模型将温度 $T$ 视为质量平均变量，导热系数 $k$ 的计算式为:
$$k=\alpha_{l}k_{l}+(1-\alpha_{l})k_{v}\tag{3.2}$$
VOF模型也将能量 $E$ 视为质量平均变量，其形式如下：
$$E=\frac{\alpha_l \rho_l E_l+\alpha_v \rho_v E_v}{\alpha_l \rho_l+\alpha_v \rho_v}\tag{3.3}$$
其中$E_{l}$和$E_{v}$是基于相的比热$C_{v}$和热量状态方程给出的共享温度：
$$\begin{aligned}
& E_l=c_{v, l}\left(T-T_{s a t}\right) \\
& E_v=c_{v, v}\left(T-T_{s a t}\right)
\end{aligned}\tag{3.4}$$
对于两个相，也在整个区域内求解一个单一的能量方程，计算的温度在相之间共享。

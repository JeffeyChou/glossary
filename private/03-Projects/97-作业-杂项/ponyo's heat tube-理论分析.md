---
title: ponyo's heat tube-理论分析
date: 2022-12-17 20:52:36
excerpt: 
tags: 
- 物理实验 
- 波妞热管 
- 弹状流 
- 泰勒气泡 
- slug_flow 
- Taylor_bubbles
rating: ⭐
status: complete 
destination: 03-97 
share: false
obsidianUIMode: source
---
# 气泡的产生原因
弹状流的形成可以由液塞(slug flow)和几乎充满整个管径的大气泡(Taylor bubbles)交替出现而产生的。

目前科研界对弹状流的产生状况依旧没有统一的认识，我们基于这篇文献[^1] ，对我们在实验室里观察到的现象给出了初步的解释。

在恒定的加热功率下，加热端温度不断升高，液体之间温差带来的密度差异导致了自然对流：热水向热管顶端流动，而冷水则下沉到下端。<u>这个在视频中可以观察到，因为温度不同带来液体透光率的差异导致我们可以直接管观察到流体的对流</u> 。

在加热过程中，液体因为温度上升而导致气体溶解度变少，部分气体以小气泡的形式溢出，最后附着在管壁。<u>这个现象在我们初次启动装置后，在热管的中上端可以观察到附着的气泡</u> 。

当温度进一步升高时，液体达到气化条件，开始在加热端处出现小气泡。随着液体中气泡密度增大，液体的空隙率增加，当气泡密度达到临界尺寸时（一定的空隙率），由于系统的不稳定性，整个管道气泡突然合并形成紊乱结构，气泡开始聚集合并，其尾迹的卷吸作用使得后续气泡的相对速度变高，许多小气泡加速碰撞聚集，最后一个几乎占满整个管径的大气泡(taylor bubble)形成，在浮力作用下向上运动，气泡里面的蒸汽遇到气泡顶端的温度低的液体后重新液化或者溶解进去，整个气泡开始消失，这个解释也被观察中气泡的顶端运动速度比底端速度慢所暗示。

如果这个气泡的存在周期足够长，那么气泡的底端甚至会直接与顶端碰撞破裂成小气泡逸散。在这个大气泡的运动过程中，其巨大的动量会裹挟温度高的液体上升到冷端，带走热端的巨大热量。整个装置又重新回到小气泡刚开始形成的阶段，完成了一个周期。

随着气液两相流量(或[[雷诺数]])的增加，连续相或离散相均处于强湍流状态，使空隙率波产生的聚并机制遭到破坏；同时，流动中会出现大量气泡群组成的气团，随机地出现并分布在不同的径向位置，这种由大量气泡组成的气团并不能产生聚并或以较快的速度同周围的气泡发生碰并，形成与管径尺寸相当的泰勒气泡，高雷诺数和剧烈的湍流运动抑制了泰勒气泡的形成，随着空隙率的上升，泡状流“失稳”后经过弹帽泡状流、弹帽沫状流，最后演化为块状流。<u>这个在YouTube上我录制的gif有提现</u> 
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/IVciJTy.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Fig. 1. Schematic representation of the different types of gas–liquid flow patterns commonly referred in the literature.
    </div>
</center>
综述[^2] 给出了Five main types of gas–liquid flow patterns: bubbly, slug, semiannular, annular, and mist.这里在 Fig.1中可以看到。



# 气泡的形状-流体力学细节
弹状汽泡微段实际上由三部分组成：上升的弹状汽泡、由弹状汽泡载带提升并含有 散小汽泡的液塞、以及沿弹状汽泡外回流的薄液膜。在Taylor气泡和管壁之间，液体以薄膜的形式向下流动。当它到达气泡底部时，环状液膜以扩张射流的形式进入其后方的液弹中，根据流动条件的不同，有可能产生一个称为气泡尾迹的回流区。气泡尾缘形状和尾流流型除了取决于流动条件外，还取决于流体性质和管道几何形状。在图二[^2]中则给出了单个Taylor Bubble 和连续两个Taylor Bubble 下气泡的形状：	
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/Di1cQ6u.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Fig. 2. Numerical images of the flow around (a) a single Taylor bubble and (b) two consecutive Taylor bubbles rising through stagnant liquid.
    </div>
</center>

为了后续方便分析，我们主要关注单个Taylor气泡的运动情况：
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/Grg6UbH.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Fig. 3. Schematic representation of the main hydrodynamic features assessed in the present review.
    </div>
</center>


## Nose region
在其运动过程中，Taylor气泡驱替其前方的液体，改变其前方的速度场。 

在实验和仿真中发现，当 Morton数 $M$ 介于 $1.64 \times 10^{-2} \sim 104$ ，同时满足 $N_{f} > 40$ 的条件时，$\frac{Z_{A}}{D}$ 大致满足如下关系：$$\frac{Z_{A}}{D}= 2.460 \times10^{-2} \ln(N_{f})+0.393 $$
考虑到轴线的原点位于气泡的头部，作者提出气泡的头部和薄膜部分的形状可以由以下方程近似：
$$
\dot{x}=\left\{\begin{array}{c}
0.75\left(1-\sqrt{1-1.778 \dot{r}^2}\right), \dot{x} \leq 0.5 \\
\frac{0.123}{\left(1-\dot{r}^2\right)^2}, \dot{x} \geq 0.5
\end{array}\right.
$$
其中 $\dot{x}$ 是原点指向下方的轴向距离并且由管道半径 $R$ 归一化； $\dot{r}$ 是距离管道轴线的距离，也由 $R$ 归一化。 

其他人则对液体滞流和并流垂直管柱中的两相弹状流进行了评估，认为Taylor气泡的扁椭球形前锋仅取决于其前方的流动条件，即液体速度场和黏度。事实上，在层流区，气泡头部的曲率随着液体黏度的增加而减小，也随着Taylor气泡速度的增加而减小。

据此一些作者选择Taylor气泡头部的曲率半径 $R_{N}$ 作为表征该区域气泡形状的参数。有人提出了关于Taylor气泡的最大半径 $R_{TB}$ 公式：$$R_{N}=0.75R_{TB}=0.75(R-\delta)$$ 
后续实验也证实该公式是有效的。

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://i.imgur.com/UrcyWUj.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Fig. 4. Schematic representation of the development of the liquid film established between the Taylor bubble and the wall of the tube.
    </div>
</center>

## Film region 
泰勒气泡上升所置换的液体以薄膜的形式通过气泡与管壁之间的环形空间向下流动。由于流动的连续性，气泡截面半径从头部进一步增大，相应轴向等值面处的平均液体速度也随之增大。由于液膜附近的压力是恒定的(由于气泡内部的压力恒定)，因此，作用在液膜上的重力必须由壁面和气液界面处的剪切应力来平衡，因此，与气泡头部处的流动不同，液膜区域的流动取决于气泡长度。

随着液体向头部下方流动，最初紧邻管壁的液膜边界层开始发展，并逐渐占据整个环形区域直至气液界面。因此，黏性效应对液膜速度剖面的影响增大。

一些作者[^2] 根据实验和仿真提出了Taylor气泡周围充分发展的环形膜的速度截面和厚度的主要关联式。这里作者假设液体沿垂直平面壁面流动，属于层流和牛顿流体，并且 $\delta \ll R$ 
$$U_{F}(r) =\frac{g}{v_{L}}(\delta r - \frac{r^{2}}{2})$$
在气泡头部 $r=\delta$ ,因此该处的速度为 $$U_{F}=U_{F(max)}=\frac{g \delta^{2}}{2 v_{L}}$$ 

# 气泡的速度分析
单个Taylor气泡在静止液体垂直上升过程中受到重力、粘性力和界面力的作用。这里文献[^2] 提到了使用量纲分析法分析气泡上升速度的估计问题。Taylor气泡速度 $U_{TB}$ 取决于：$g$ 重力加速度；$D$ 管内直径；液体(L)和气体(G)的物理性质，包括粘度 $\rho$ ，速度 $\mu$ 气液表面张力 $\sigma$ ；以及气泡的几何参数，长度 $l_{TB}$ 。

在实验中我们发现气体的膨胀对向低压区上升的气泡速度有影响，同时，气泡头部的速度也会随着气泡的长度增加而增加。因此气体膨胀对气泡速度的影响可以通过将发生在管道轴线上的最大液体速度减去 $U_{TB}$ 来校正，得到恒定的气泡速度，对应于气泡在两端封闭的管道中上升的速度。得到
$$Fr= \frac{U_{TB}^{2}\cdot \rho_{L}}{g \cdot D \cdot (\rho_{L}-\rho_{G})}$$
而对于这个 [[弗劳德数]] 很多前人都对此给出了他们的修正，文献[^2]里对前人的工作给出了总结，最后我们得到这个比较符合实验的公式：
 $$
\begin{aligned}
& \mathrm{Fr}=\frac{U_{T B}}{\sqrt{g D}}=\sqrt{\frac{G . H}{\frac{H}{0.35^2}+F}} \\
& G=\left(1+\frac{3.87}{\mathrm{Eo}^{1.68}}\right)^{-18.4} \\
& H=0.0025[3+G] \\
& F=\frac{1}{\operatorname{Re}_{\mathrm{TB}}}\left(1-0.05 \sqrt{\operatorname{Re}_{\mathrm{TB}}}\right)
\end{aligned}
$$
其中 $Eo$ 是Eötvös group，表面张力与重力效应的比值。定义为：
$$\frac{g \cdot (\rho_{L}-\rho_{G})\cdot D^{2} }{\sigma}$$
这个公式在条件$$
\begin{aligned}
& 10^{-7}<\operatorname{Re}_{\mathrm{TB}}<10^4 \\
& 4<\mathrm{Eo}<3 \times 10^3 \\
& 10^{-2}<\mathrm{N}_f<10^5 \\
& 10^{-11}<\mathrm{M}<10^{10}
\end{aligned}$$
中很好符合我们的结果。


# 气泡的热力学理论分析
沸腾基本过程的热力学分析和实验研究已经揭示， 1个胚泡要长大并脱离加热表面必须要有一定的过热度。此处取液膜沸腾平均过热度为5°C。 此外，还应考虑到液膜透入深度处的压力对弹状汽泡内的压力的影响。


# Nomenclature
$$
\begin{array}{ll}
a^2 & \text { Specific cohesion } \mathrm{m}^2 \\
\dot{b} & \text { Dimensionless film thickness for turbulent flow } \\
C & \text { Ratio between the centreline and the mean liquid } \\
& \text { velocities } \\
D & \text { Internal diameter of the tube } \mathrm{m} \\
\mathrm{g} & \text { Acceleration due to gravity } \mathrm{m} \mathrm{s}^{-2} \\
l_S & \text { Length of the liquid slug } \mathrm{m} \\
l_{T B} & \text { Length of the Taylor bubble } \mathrm{m} \\
r & \text { Radial coordinate } \mathrm{m} \\
\dot{r} & \text { Distance from the central axis of the tube nor- } \\
& \text { malised by its radius } \mathrm{m} \\
R & \text { Internal radius of the tube } \mathrm{m} \\
R_N & \text { Radius of curvature at the nose of the bubble } \mathrm{m} \\
R_{T B} & \text { Taylor bubble radius } \mathrm{m} \\
u & \text { Velocity } \mathrm{m} \mathrm{s}^{-1} \\
u_* & \text { Friction velocity } \mathrm{m} \mathrm{s}^{-1} \\
U_F & \text { Velocity in the annular liquid film } \mathrm{m} \mathrm{s}^{-1} \\
U_{T B} & \text { Taylor bubble velocity } \mathrm{m} \mathrm{s}^{-1} \\
z & \text { Axial coordinate } \mathrm{m} \\
Z * & \text{Distance from the nose where the liquid film is fully developed m} \\
Z_{A} & \text{Interaction distance abouve the nose of the bubble m}
\end{array}
$$
## Greek Letters
$$\begin{array}{ll}\dot{\gamma} & \text { Deformation rate } \mathrm{s}^{-1} \\ \delta & \text { Annular liquid film thickness } \mathrm{m} \\ \mu & \text { Dynamic viscosity Pa s } \\ \rho & \text { Density } \mathrm{kg} \mathrm{m}^{3}\\ v & \text { Kinematic viscosity } \mathrm{m}^2 \mathrm{~s}^{-1}\end{array}$$
## Dimensionless groups
$$\begin{array}{ll}\text { Eo } & \text { Eötvös number } \\ \mathrm{Fr} & \text { Froude number } \\ \mathrm{M} & \text { Morton number } \\ \mathrm{N}_f & \text { Inverse viscosity number } \\ \mathrm{Re} & \text { Reynolds number } \\ \operatorname{Re}_{T B} & \text { Reynolds number based on the velocity of the Tay- } \\ & \text { lor bubble }\end{array}$$

# 参考文献
[^1]: 陈振瑜, 李志彪, 何利民,等. 垂直管气液两相弹状流流动特性研究进展[J]. 管道技术与设备, 2005(4):4.
[^2]: Morgado, A.O., Miranda, J.M., Araújo, J.D.P., Campos, J.B.L.M., 2016. Review on vertical gas–liquid slug flow. Int J Multiphas Flow, 无 85, 348–368. [https://doi.org/10.1016/j.ijmultiphaseflow.2016.07.002](https://doi.org/10.1016/j.ijmultiphaseflow.2016.07.002)

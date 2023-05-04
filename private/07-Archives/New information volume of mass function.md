---
date: 2023-03-17 08:48:59
tags:
- Information_Volume 
- Paper_Draft
updated: 2023-03-17 21:29:42
---
# 4. Numerical Examples and Discussion
In this section, some of the typical numerical examples are presented to better illustrate the difference between the proposed information volume of mass function and the existing one of deng's\cite{Deng2020}. And the discussion is followed after each example. In this section, the allowable error is set to $0.001$.
## Example 1
Given a frame of discernment $\Theta=\{x_{1,}x_{2},\cdots, x_{n}\}$, a mass function is shown as follows:
$$
m(\{x_{i}\})=\frac{1}{n}, \quad i = 1, 2,\cdots, n
$$
Then, we calculate the unicertainty of this case as $n$ increases from $1$ to $11$. The results of the uncertainty measures of BPAs are showed in [Table 2]. Besides, to better illustrate the trend of different uncertainty mesures as $n$ changes, the results of different methods are visualized in [Figure 1]

### Table 2

$$
\begin{array}{cccc}
\hline \text { UM} & \text { Hohle's } & \text { Hartley's} & \text { Yager's} & \text { Yang and Han's} & \text { Deng entropy} & H_{IV}& H_{IV'-PPT} & H_{IV'_PTM}\\
\hline 
n=1 & 0.0000 &  0.0000 &  0.0000 &  0.0000 &  0.0000 &  0.0000 &  0.0000 &  0.0000 \\
n=2 & 1.0000 &  0.0000 &  1.0000 &  0.5000 &  1.0000 &  1.0000 &  1.0000 &  1.0000 \\
n=3 & 1.5850 &  0.0000 &  1.5850 &  0.4226 &  1.5850 &  1.5850 &  1.5850 &  1.5850 \\
n=4 & 2.0000 &  0.0000 &  2.0000 &  0.3386 &  2.0000 &  2.0000 &  2.0000 &  2.0000 \\
n=5 & 2.3219 &  0.0000 &  2.3219 &  0.2789 &  2.3219 &  2.3219 &  2.3219 &  2.3219 \\
n=6 & 2.5850 &  0.0000 &  2.5850 &  0.2362 &  2.5850 &  2.5850 &  2.5850 &  2.5850 \\
n=7 & 2.8074 &  0.0000 &  2.8074 &  0.2046 &  2.8074 &  2.8074 &  2.8074 &  2.8074 \\
n=8 & 3.0000 &  0.0000 &  3.0000 &  0.1803 &  3.0000 &  3.0000 &  3.0000 &  3.0000 \\
n=9 & 3.1699 &  0.0000 &  3.1699 &  0.1611 &  3.1699 &  3.1699 &  3.1699 &  3.1699 \\
n=10& 3.3219 &  0.0000 &  3.3219 &  0.1456 &  3.3219 &  3.3219 &  3.3219 &  3.3219 \\
n=11& 3.4594 &  0.0000 &  3.4594 &  0.1328 &  3.4594 &  3.4594 &  3.4594 &  3.4594 \\
\hline
\end{array}
$$


### Figure 2

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/BS8dTvX.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">The results of example 1
    </div>
</center>


As shown in [Figure 2], it is obvious that the unicertainty degree measured by the yager's Dissonance measure is always equal to $0$. One interesting point is that the result of Yang and Han's measure. This result rises at first and then becomes smaller as $n$ increases, which is counterintuitive. It can be explained from its formula in this way that as the FOD increases, the mass function of each focal element decreases, resulting in a smaller belief interval assigned to each element and thus a smaller result. 

Apart from the two method menetioned above, all the uncertainty measures gave exactly the same result as the Deng Entropy did. In Deng's paper \cite{Deng2016}, the author had alreadly shown that when the BPAs are Bayesian mass function, the results are consistent with the results calculated by Shannon entropy. Therefore, the proposed method in this paper is acceptable in the case when the BPAs are degenerated into single focal element.

## Example 2
Considered a FOD: $\Theta=\{x_{1}, x_{2},\cdots, x_{n}\}$, the mass function is given as $m=(\{x_{1}, x_{2},\cdots, x_{n}\})=1$. When $n$ changes from $1$ to $11$ with a step of $1$, the results of the uncertainty measures of mass function are shown in [Figure 3] 

### Figure 3

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/Pp1taFs.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">The results of example 2
    </div>
</center>


From [Figure 3], the results show that Yager's Dissonance measure is always $0$ while the methods proposed by Yang and Han as well as the Hartley have a slight increase at the beginning, followed by a decreasing growth rate as $n$ increases, and finally slowly become a curve with a gradually decreasing slope.

As for the proposed method, the results are slightly higher than the Deng entropy when the $n$ is very small($H_{IV'-PPT}$ and $H_{IV'-PPT}$ have the same values so it looks like there only $H_{IV'-PPT}$ in the figure). However, as the $n$ increases continuously, the uncertainty calculated by Deng entropy is higher than the former. This is also reasonable because when the $n$ is big enough, a small increase of $n$ would not make a difference. For example, when the $n$ is set to $1000$ and $1001$, the small change in the FOD does not result in noteworthy difference in total uncertainty of mass function, especially in the case of vacuous BPA.

Another noticable difference is that the Information volume of mass function proposed by Deng shown a much higher unicertainty as $n$ increases. That means more information in the FOD is taken into account within these proposed methods. However, it can be seen from the image that the slope of the curve of this method is almost constant as $n$ increases, and in contrast our proposed method is much more reasonable.

## Example 3
Let $\Theta=\{1,2,3,4\}$ be the FOD, There esists two BPAs as follows.
$$
\begin{align}
m_{1}(\{1\})=\frac{1}{4} \quad m_{1}(\{2\})=\frac{1}{4} \quad m_{1}(\{1,2\})=\frac{1}{2} \\
m_{2}(\{1\})=\frac{1}{4} \quad m_{2}(\{2\})=\frac{1}{4} \quad m_{2}(\{3,4\})=\frac{1}{2} \\
\end{align}
$$

The unicertainty calculated by different entropy, methods and the proposed method are shown in [Figure 4]

### Figure 4

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/ttyox1X.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">The results of example 3
    </div>
</center>


Intuitively, the uncertainties of $m_1$ and $m_2$ are different in this given FOD. Although the values of the two BPAs are the same, the uncertainty should be smaller for $m_1$ than for $m_2$. From the results in [figure 4], only Yager's dissonance measure as well as the $H_{IV'-PTM}$ reflected this result correctly, and the other entropy and methods did not get the correct result. However, Yager’s dissonance entropy method did not consider the non-specificity measure. Thus, when the BPAs values are the same, but the focal elements are different, the proposed method can correctly represent the differences and obtain intuitive results.

## Example 4
Similar to Example 3, Let $\Theta=\{1,2,3,4\}$ be the FOD. Given two mass function:
$$
\begin{align}
m_{1}(\{1,2\})=\frac{1}{4}\quad m_{1}(\{3,4\})=\frac{1}{2} \\
m_{2}(\{1,2\})=\frac{1}{4} \quad m_{2}(\{1,3\})=\frac{1}{2} \\
\end{align}
$$

the unicertainty measured by some of the esisting entropy and methods  as well as the proposed method are shown in [Figure 5]

### Figure 5

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/nLuwrzW.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">The results of example 4
    </div>
</center>


As seen from [figure 5], among these 8 unicertainty measures, only the $H_{IV'-PTM}$ shows a lower uncertainty in the second mass function, which is conhent with intuitive. The remaining unicertainty measures do not reflect this fact correctly and get the same result.

As seen in [example 3] and [example 4], when the FOD obtained in the mass function are inconsistent, this inconsistency may be either with the pre-given FOD or with the FOD obtained from different mass functions, leading to the final calculation of the counter-intuitive uncertainty. In these examples, the proposed method can effectively and correctly obtain the intuitive results.

## Example 5
Let $\Theta=\{1,2,\cdots,15\}$ be the FOD which contains 15 elements. A mass function defined on the FOD is:
$$
m(\{3,4,5\})=0.05 \quad m(\{6\})=0.05 \quad m(\{A\})=0.8 \quad m(\{X\})=0.1
$$
where $A$ is a variable subset of $X$ with only single elements and changing cardinality from $1$ to $14$. Namely, the numer of the elements of A is changing from $1$ to $14$ by adding element $1, 2, \cdots 14$ to $A$. When A changes, the unicertainty measured by the given unicertainty measures are shown in [figure 6]. [table 3] shows the results between the Deng entropy, information volume of mass function and the proposed method.

### Table 3
$$
\begin{array}{cccc}
\hline \text { Cases } & \text { Deng Entropy } & H_{IV} & H_{IV'-PPT} & H_{IV'-PTM}  \\
\hline \mathrm{A}=\{1\} & 2.6623 & 5.3312 & 2.8202 & 4.2338\\
\mathrm{~A}=\{1,2\} & 3.9303 & 8.0731 & 4.3014 & 5.0898\\
\mathrm{~A}=\{1,2,3\} & 4.9082 & 10.5072 & 5.3850 & 5.7523\\
\mathrm{~A}=\{1, \cdots, 4\} & 5.7878 & 12.8283 & 6.2979 & 6.3619\\
\mathrm{~A}=\{1, \cdots, 5\} & 6.6256 & 15.0959 & 7.1107 & 6.9422\\
\mathrm{~A}=\{1, \cdots, 6\} & 7.4441 & 17.3356 & 7.8557 & 7.5011\\
\mathrm{~A}=\{1, \cdots, 7\} & 8.2532 & 19.5597 & 8.5504 & 8.0665\\
\mathrm{~A}=\{1, \cdots, 8\} & 9.0578 & 21.7752 & 9.2058 & 8.6136\\
\mathrm{~A}=\{1, \cdots, 9\} & 9.8600 & 23.9856 & 9.8290 & 9.1443\\
\mathrm{~A}=\{1, \cdots, 10\} & 10.6612 & 26.1932 & 10.4253 & 9.6603\\
\mathrm{~A}=\{1, \cdots, 11\} & 11.4617 & 28.3992 & 10.9984 & 10.1629\\
\mathrm{~A}=\{1, \cdots, 12\} & 12.2620 & 30.6043 & 11.5512 & 10.6530\\
\mathrm{~A}=\{1, \cdots, 13\} & 13.0622 & 32.8088 & 12.0860 & 11.1316\\
\mathrm{~A}=\{1, \cdots, 14\} & 13.8622 & 35.0131 & 12.6048 & 11.5996\\
\hline
\end{array}
$$

### Figure 6

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/raWdfsx.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">The results of example 5
    </div>
</center>

As seen from [Figure 6], as the cardinality of A increases, Yager’s Dissonance measure and Hohle's Confusion measure show a downward trend, which does not cohere with the connotation fo uncertainty. Only the Weighted Hartley entropy, Deng entropy and the two kinds of information volume of mass function increase monotonuously among these given measures.

From common sense, the uncertainty of BPA increases as the cardinality of A increases, for the fact that A gradually intersects with other proposisitons, which adds the unicertainty intuitively. 

[Table 3] shows the different results among the three measures. The two kinds of information volume give a higher value of Deng entropy, this is reasonable since the two measures consider a higher order of information. However, as the number of elements in $A$ increase to a greater value, the results given by the proposed measure is less than Deng entropy, this can also be explained in [example 2]

# Conclusion
Information volume is a measure used in probability theory to quantify the amount of information contained in a probabilistic event or a probability distribution. It is also known as the entropy of a probability distribution. In evidence theory, Deng defined the information volume of mass function based on Deng entropy, which shares the same properity with Shannon entropy and Deng entropy in some cases. 

In this paper, an improved information volume of mass function is proposed, it can be regarded as the Geometric mean of first order of information volume and higher order of information volume. When the BPA degenerates to bayesian probability distribution, the proposed method can be degenerated to Shnnon entropy. Some numerical examples are discussed in this paper to better compare the two kinds of information volume of mass function. Compared with the existing information volume of mass function, the proposed method can better solve the problem of result and intuition violation due to inconsistency of the frame of discernment in BPA. In addition, some other existing uncertainty measures are used to compare the information volume of mass function, showing that the porposed method is also a valid and efficient uncertainty measure.

# 2. Preliminaries
In this section, some preliminaries are briefly introduced, including Dempster-Shafer evidence theory, Shannon entropy, Deng entropy, information volume of mass function and other typical uncertainty measures under the framework of Dempster-Shafer evidence theory.

## Dempster-Shafer Evidence Theory 
- **Definition 2.1** (BPA). 
For a finite set $\Theta$ with $n$ mutually exclusive and collectively exhaustive events, it can be denoted as $\Theta=\{\theta_{1}, \theta_{2},\cdots \Theta_{n}\}$, which is called as frame of discernment(FOD). And the power set of $\Theta$ is defined as $2^{\Theta}$, where
$$
2^{\Theta}=\left\{\varnothing,\left\{\theta_1\right\}, \cdots,\left\{\theta_{n}\right\},\left\{\theta_1, \theta_2\right\}, \cdots\left\{\theta_1, \theta_2, \cdots \theta_i\right\}, \cdots, \Theta\right\}
$$
A basic probability assignment(BPA), is defined as a mapping from $2^{\Theta}$ to the intervel $[0,1]$. And the mass function $m(A_i)$ satisfies:
$$
m(\varnothing)=0 ; \quad \sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right)=1 ; \quad m\left(A_i\right) \geqslant 0
$$
and $A_{i}$ is called the focal element if $m(A_{i}) >0$.

- **Definition 2.2** (Belief functions). 
For a FOD $\Theta$ with $n$ elements, and its BPA $\mathbb{B}\left(2^{\Theta}\right)$, the belief (Bel) function and the plausibility(Pl) function are defined as follows.
$$
\begin{aligned}
& Bel\left(A_i\right)=\sum\limits_{B_i \subseteq A_i} m\left(B_i\right)=1-Pl\left(\overline{A_i}\right) \\
& Pl\left(A_i\right)=\sum\limits_{B_i \cap A_i \neq \varnothing \wedge B_i \subseteq \Theta} m\left(B_i\right)=1-Bel\left(\overline{A_i}\right)
\end{aligned}
$$
It is obvious that $Bel(A) \leqslant Pl(A)$, and the belief interval of $A$ is $[Bel(A), Pl(A)]$.

## Shannon Entropy 
Entropy is significant when it comes to measure the uncertainty in information theory. Especially, Shannon entropy has been applied not only in information theory, but also in probability theory. 

- **Definition 2.3** (Shannon entropy)
Given a probability distribution $P=\{p_{1},p_{2},\cdots,p_{n}\}$, the Shannon entropy of $P$ is defined as follows.
$$
E_S(P)=-\sum\limits_{i=1}^{n}p_{i}log_{2}(p_{i})
$$
where $p_{i}$ satisfies $\sum\limits_{i=1}^{n} p_{i} =1$

When the probability distribution satisfies a uniform distribution, namely, $p_{i}=\frac{1}{n} \ for \ i=1,2\cdots,n$. the Shannon entropy reaches its maximum value, which represents the maximum information volume of $n$ discrete random variables in probability distribution.


## Deng entropy and information volume of mass function
Deng entropy is a power tool in measuring the uncertainty evidence theory, which is a generalization of Shannon entropy. 

- **Definition 2.4** (Deng entropy).
Given a BPA, Deng entropy is defined as
$$
\begin{align}
E_{D} &=-\sum\limits_{A_i \subseteq \Theta} m(A_{i}) \log_2 \frac{m\left(A_i\right)}{2^{\left|A_i\right|}-1} \\
&=\sum\limits_{A_{i} \subseteq \Theta} m(A_{i}) \log_2\left(2^{|A_{i}|}-1\right)-\sum\limits_{A_{i} \subseteq \Theta} m(A_{i}) \log_2 m(A_{i})
\end{align} 
$$
where $|A_{i}|$ is the cardinality of A. And the term $m(A_{i}) \log_2\left(2^{|A_{i}|}-1\right)$ can be regarded as a measure of total nonspecificity while the term $- m(A_{i}) \log_2 m(A_{i})$ can be interpreted as a measure of discord. Deng entropy can be degenerated to Shannon entropy if and only if the mass function is assigned to singleton elements, in which case $E_{D}= - \sum\limits_{A_{i} \in \Theta} m(A_i)log_2m(A_{i})$.

When splitting the mass function into their power set, more information can be considered. Thus, Deng proposed the information volume of mass function based on Deng entropy.

- **Definition 2.5** (Information volume of mass function). 
For an n-element FOD $\Theta$, its power set is marked as $X= 2^{\Theta}$. The information volume of mass function can be calculated by the following steps:

Step 1: Input the BPA $m(A_{i})$ 

Step 2: Continuously split the mass function of $A_{i}$ based on the maximum Deng entropy distribution if $|A_{i}| >1$. Calculate the uncertainty of all the mass functions, if the increase in the result is less than the allowable error $\varepsilon$, the loop is jumped, otherwise continues to split the mass functions.

Step 3: Output the Deng entropy of the last loop, which is the information volume of mass function.

To better understand the splitting process in calculation, [Figure 1] shows the splitting method of a vacuous BPA: $\mathbb{B}(\Theta) =m(\Theta) =1$, where $\Theta =\{\theta_1, \theta_2\}$  

### Figure 1

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/SXpoEL7.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Figure 1 the splitting process of information volume of mass function 
    </div>
</center>



## Some Probability Transformation Methods
- **Definition 2.6** (Plausibility transformation method) 
The plausibility transformation method(PTM) of an n-element FOD $\Theta$ with its BPA $\mathbb{B}(2^{\Theta})$ is defined as:
$$
PnPl\left(\theta_i\right)=\frac{Pl\left(\theta_i\right)}{\sum\limits_{j=1}^n Pl\left(\theta_j\right)}
$$

- **Definition 2.7** (Pignistic probability transformation). 
The pignistic probability transformation(PPT) of an n-element FOD $\Theta$ with its BPA $\mathbb{B}(2^{\Theta})$ is defined as:
$$
BetP\left(\theta_i\right)=\sum\limits_{\theta_{i} \in A_{i} \wedge A_{i} \in 2^{\Theta}} \frac{m(A_{i})}{|A_{i}|}
$$

Apart from PPT and PTM, there are other kinds of probability transformation methods\cite{smets2005decision}\cite{cobb2006plausibility,Pan2020}, most of which are specializations of PPT. 
In the next section, the definition of the improved information volume of mass function will be given, which is based on the probability transformation method. This paper will give two types of calculations based on PTM and PPT, because the results obtained using other probability transformation methods are similar.


## Unicertainty Measures
In evidence theory, some definition of unicertainty measures are listed in [Table 1].
Table 1
These are classical and novel uncertainty measurements of BPA
$$
\begin{array}{cccc}
\hline \text{Methods} & \text{Expression} & \text{Maximum distribution} & \text{Maximum value}\\
\hline \text{Ambiguity measure}\cite{jousselme2006measuring} & H_{AM}=\sum\limits_{\theta_i \in \Theta} P_{\mathbb{B}}^{\Theta}\left(\theta_i\right) \log_2 \left(P_{\mathbb{B}}^{\Theta}\left(\theta_i\right)\right) & P_{\mathbb{B}}^{\Theta}\left(\theta_i\right)=\frac{1}{|\Theta|} & \log_2 (|\Theta|)\\
\text {Hohle's Confusion measure}\cite{höhle1982entropy} & C_H=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 Bel\left(A_i\right) & m\left(\theta_i\right)=\frac{1}{|\Theta|} & \log_2 (|\Theta|) \\
\text {Yager's Dissonance measure}\cite{yager1983Entropy} & D_Y=-\sum\limits_{A_i \in 2^{\ominus}} m\left(A_i\right) \log_2 Pl\left(A_i\right) & \begin{array}{c}m\left(A_i\right)=\frac{1}{K}, \forall 1 \rightarrow K \\\left\{F_1\right\} \cap \cdots \cap\left\{F_K\right\}=\varnothing\end{array} & \log_2 (|\Theta|) \\
\text{Weighted Hartley entropy}\cite{higashi1982MEASURES}& E_H=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \left|A_i\right| & m(\Theta)=1 & \log_2 (|\Theta|)\\
\text {Discord measurement}\cite{klir1990UNCERTAINTY} & S_{K P}=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \sum\limits_{B_i \in 2^{\Theta}} m\left(B_i\right) \frac{\left|A_i \cap B_i\right|}{\left|B_i\right|} & m\left(\theta_i\right)=\frac{1}{|\Theta|} & \log_2 (|\Theta|) \\
\text {Aggregate uncertainty}\cite{harmanec1994MEASURING} & \operatorname{argmax}_{\mathcal{P}}\left[-\sum\limits_{i=1}^n p\left(\theta_i\right) \log_2 p\left(\theta_i\right)\right] & BetP\left(\theta_i\right)=\frac{1}{|\Theta|} & \log_2 (|\Theta|) \\
\text{Pal et al.'s entropy}\cite{pal1993Uncertainty}  & E_p=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \frac{m\left(A_i\right)}{\left|A_i\right|} & m\left(A_i\right)=\frac{\left|A_i\right|}{|\Theta| \cdot 2^{\theta \mid-1}} & \log_2 \left(|\Theta| \cdot 2^{|\Theta|-1}\right)\\
\text {Yang and Han's method}\cite{yang2016New}& T U^l=1-\frac{\sqrt{3}}{n}\sum\limits_{\theta_i \in \Theta} d^l\left(\left[Bel\left(\theta_i\right), P l\left(\theta_i\right)\right],[0,1]\right) & m(\Theta)=1 & 1 \\
\text{Deng entropy}\cite{Deng2016} & E_d=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \frac{m\left(A_i\right)}{2^{A_i \mid}-1} & m(A)=\frac{2^{\left|A_i\right|-1}}{\sum\limits_{A_i \in 2^{\Theta}} 2^{A_i \mid}-1} & \log_2 \left(3^{|\Theta|}-2^{|\Theta|}\right)\\
\text{SU measurement}\cite{wang2018uncertainty}  & S U=\sum\limits_{\theta_i \in \Theta}\left[-\frac{P l\left(\theta_i\right)+Bel\left(\theta_i\right)}{2} \log_2 \frac{P l\left(\theta_i\right)+Bel\left(\theta_i\right)}{2}+Pl\left(\theta_i\right)-Bel\left(\theta_i\right)\right] & Bel\left(\theta_i\right)=0 , Pl\left(\theta_i\right)=1 & |\Theta| \\
\text{JS entropy}\cite{jirouvsek2018new}  & H_{J S}=\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \left(\left|A_i\right|\right)-\sum\limits_{i=1}^n P l P_m\left(\theta_i\right) \log_2 P l P_m\left(\theta_i\right) & m(\Theta)=1 & 2 \log_2 (|\Theta|) \\
\hline
\end{array}
$$

# 3. The Proposed Method
Given a BPA, the information volume can be measure by Deng's method. However, when the FOD of two different BPAs do not agree with each other, the result of Deng's information volume of mass function gives counterintuitive results. Hence, the paper proposed a new kind of information volume of mass function to solve this problem. In this section, based on the previous work of Deng's and probability transformation method like PPT and PTM, the proposed information volume of mass function will be defined.

**Definition 3.1** (Improved Information Volume of Mass Function)
Given a frame of discernment $\theta =\{\theta_{1}, \theta_{2}\cdots, \theta_{n}\}$ with its BPA: $\mathbb{B}(2^{\Theta}): m(A_{i})\  for \ A_{i} \in 2^{\Theta}$. The proposed  information volume of mass function is defined as follows.
$$
H_{IV'}=\sqrt{H_{IV} \cdot \sum\limits_{i=1}^n E_{S}(P_{\mathbb{B}}^{\Theta}(\theta_{i}))}
$$
Where $H_{IV}$ is the information volume of Deng's, while $E_{S}$ is the Shannon entropy and the $P_{\mathbb{B}}^{\Theta}(\theta_{i})$ is the probability distribution obtained from the BPA transformation by the probability transformation methods.

For the information volume of mass function using PPT, PTM as probability transformation method, this paper use $H_{IV'-PPT}$ and $H_{IV'-PTM}$ to rpresent respectively. Namely,
$$
\begin{align} 
H_{IV'-PPT}= \sqrt{H_{IV} \cdot \sum\limits_{i=1}^n E_{S}(BetP(\{\theta_{i}\}))} \\
H_{IV'-PTM}=\sqrt{H_{IV} \cdot \sum\limits_{i=1}^n E_{S}(PnPl(\{\theta_{i}\}))}
\end{align}
$$


For example, Let $\Theta =\{\theta_{1,}\theta_{2}, \theta_{3}\}$ be the FOD, there are two BPAs:
$$
\begin{align}
m_{1}(\{\theta_{1}\})=\frac{1}{3} \quad m_{1}(\{\theta_{2}\})=\frac{1}{3} \quad m_{1}(\{\theta_{3}\})=\frac{1}{3} \\
m_{2}(\{\theta_{1}\})=\frac{1}{3} \quad m_{2}(\{\theta_{2}, \theta_3\})=\frac{2}{3}
\end{align} 
$$
For $m_{1}$, The result of $H_{IV}$ is $H_{IV} \approx 1.584963$ using the[ definition 3.4]. $P_{\mathbb{B}}^{\Theta}(\theta_{i})=m_{1}(\theta_{i})$ since there is only singleton element in the mass function. Then $\sum\limits_{i=1}^3 E_{S}(P_{\mathbb{B}}^{\Theta}(\theta_{i}))=1.584963$. Eventually the result of $H_{IV'}$ is: $H_{IV'-PPT}=H_{IV'-PTM} \approx 1.584963$. 

For the other mass function, the information volume of $m_2$ is $H_{IV} \approx 3.202251$.  The belief and plausibility function of $\theta_{i}$ is as follows.

$$
\begin{align} 
BetP(\{\theta_{1}\})=\frac{1}{3} \quad BetP(\{\theta_{2}\})=\frac{1}{3}\quad BetP(\{\theta_{3}\})=\frac{1}{3} \\
Pl(\{\theta_{1}\})=\frac{1}{3} \quad Pl(\{\theta_{2}\})=\frac{2}{3}\quad Pl(\{\theta_{3}\})=\frac{2}{3}
\end{align} 
$$

Then $\sum\limits_{i=1}^{3}E_{S}(BetP(\theta_{i}))\approx3.201945$ while $\sum\limits_{i=1}^{3}E_{S}(PnPl(\theta_{i}))\approx 1.584962$. Finally, the result of the improved information volume of mass function is: $H_{IV'-PPT}\approx 3.202098$ and $H_{IV'-PTM}\approx 2.252875$.
 
In the next section, some numerical examples are presented to better illustrate the proposed method, along with the comparsion between the existing information volume of mass function of Deng's and the improved information volume of mass function.

# 1. Introduction

The concept of Shannon entropy\cite{shannon1948mathematical} was fundamental in laying the groundwork for information theory, a field with wide-ranging applications. At its core, Shannon entropy provides a measure of uncertainty within a system, and it is this very concept that paved the way for the development of information theory. From the study of communication and cryptography to the analysis of neural networks and genetics, information theory has found a vast array of applications, making it an unequivocally foundational concept in modern science. 

Though probability theory has long been the dominant approach to reasoning under uncertainty. However, there are some hesitant states in real life where it is difficult to express the uncertainty in probability theory\cite{che2022maximum}. To solve this problem, alternative approaches have emerged in recent decades, including Dempster-Shafer evidence theory\cite{shafer1976mathematical,ap1967upper}, probabilistic linguistic\cite{fang2021generalised,liao2020survey}, fuzzy set\cite{zadeh1965fuzzy}, soft sets\cite{alcantud2019n,feng2020enhancing}, , rough sets\cite{fujita2019hypotheses,pawlak1982rough}, Z numbers\cite{jiang2019novel,liu2019derive,luo2020vector} , D numbers\cite{deng2019total,liu2019risk,liu2020novel} and PRS\cite{Deng2022}. Which offers a more flexible and robust framework for reasoning with incomplete or uncertain information. In the study of evidence theory, the fundamental constituent is the mass function, representing the degree of credence in a particular group of hypotheses. The application of these functions affords a more intricate depiction of unclear data, but also engenders fresh obstacles, such as determining the extent of uncertainty in mass functions. Although Shannon entropy is prevalently employed to appraise the degree of ambiguity in a probability distribution, its use within the context of mass functions is not always uncomplicated. As a result, diverse forms of uncertainty measures and entropy have been postulated to surmount this dilemma,including JS entropy\cite{jirouvsek2018new}, SU measurement \cite{wang2018uncertainty}, FB entropy \cite{Zhou2022} and similar modes of analysis. Among those, the belief entropy, also named as Deng entropy\cite{Deng2016}, which was initially proposed as a measure of uncertainty in belief functions, made it a natural fit for use in evidence theory. In recent years, Deng entropy has been applied in a variety of fields, such as pattern recognition\cite{cui2019ImprovedDengEntropy}, data fusion\cite{tang2018Extension}, decision-making\cite{pan2023Evidential}. Based on the splitting method to devide the mass functions, Deng porposed the information volume of mass function\cite{Deng2020} based on Deng entropy, which has aslo been accepted and applied in many fields\cite{Zhou2020,Zhou2022,deng2021information}.

However, the existing information volume has some problem. For example, when the frame of discernment of two different mass functions does not agree with each other, namely, the elements in the mass funciton are different but have the same BPA distribution if the cardinality of the mass function is the same, the information volume of mass function of the two mass functions gives the same result, which is counterintuitive. 

To solve this problem, this paper proposed an improved information volume of mass funciton based on probability transformation. Compared with the esisting method, the proposed information volume of mass function has the following advantages:

- Compared with the esisting method, the proposed method gives a more reasonable result when the FOD of the mass functions is inconsistent.
- The proposed method can be degenerated to Shannon entropy if the mass function degenerats to probability distribution.

The paper is organized as follows. The basic concepts of evidence theory are introduced briefly in Section 2. In Section 3, the proposed method is presented, following with some numerical examples in Section 4. Finally, the paper is ended with the conclusion part in Section 5.

# Abstract
Whilst Shannon's entropy is commonly implemented to gauge the uncertainty of probability distributions, its application to mass functions in evidence theory is frequently not straightforward. To tackle this matter, multiple types of uncertainty measures and entropies, such as the Deng entropy, have been introduced. Deng subsequently proposed the information volume of mass function founded upon Deng entropy and the notion of fractals, which has found an array of applications throughout diverse fields. However, the current information volume will exhibit counterintuitive outcomes when the FOD of the mass functions is inconsistent. To surmount this issue, an enhanced information volume of mass function, operated through probability transformation, is proposed. In comparison to the former methodology, the proposed approach provides a more rational outcome.

# Title
An improved information volume of mass function based on probability transformation
# Reference


<!-- $$
\begin{array}{cccc}
\hline \text{Methods} & \text{Expression} & \text{Maximum distribution} & \text{Maximum value}\\
\hline \text{Ambiguity measure} & H_{AM}=\sum\limits_{\theta_i \in \Theta} P_{\mathbb{B}}^{\Theta}\left(\theta_i\right) \log_2 \left(P_{\mathbb{B}}^{\Theta}\left(\theta_i\right)\right) & P_{\mathbb{B}}^{\Theta}\left(\theta_i\right)=\frac{1}{|\Theta|} & \log_2 (|\Theta|)\\
\text {Hohle's Confusion measure} & C_H=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 Bel\left(A_i\right) & m\left(\theta_i\right)=\frac{1}{|\Theta|} & \log_2 (|\Theta|) \\
\text {Yager's Dissonance measure}& D_Y=-\sum\limits_{A_i \in 2^{\ominus}} m\left(A_i\right) \log_2 P\left(A_i\right) & \begin{array}{c}m\left(A_i\right)=\frac{1}{K}, \forall 1 \rightarrow K \\
\left\{F_1\right\} \cap \cdots \cap\left\{F_K\right\}=\varnothing\end{array} & \log_2 (|\Theta|) \\
\text{Weighted Hartley entropy}& E_H=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \left|A_i\right| & m(\Theta)=1 & \log_2 (|\Theta|)\\
\text {Discord measurement}& S_{K P}=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \sum\limits_{B_i \in 2^{\Theta}} m\left(B_i\right) \frac{\left|A_i \cap B_i\right|}{\left|B_i\right|} & m\left(\theta_i\right)=\frac{1}{|\Theta|} & \log_2 (|\Theta|) \\
\text {Aggregate uncertainty} & \operatorname{argmax}_{\mathcal{P}}\left[-\sum\limits_{i=1}^n p\left(\theta_i\right) \log_2 p\left(\theta_i\right)\right] & \operatorname{BetP}\left(\theta_i\right)=\frac{1}{|\Theta|} & \log_2 (|\Theta|) \\
\text{Pal et al.'s entropy}  & E_p=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \frac{m\left(A_i\right)}{\left|A_i\right|} & m\left(A_i\right)=\frac{\left|A_i\right|}{|\Theta| \cdot 2^{\theta \mid-1}} & \log_2 \left(|\Theta| \cdot 2^{|\Theta|-1}\right)\\
\text {Yang and Han's method}& T U^l=1-\frac{1}{n} \cdot \sqrt{3} \sum\limits_{\theta_i \in \Theta} d^l\left(\left[Bel\left(\theta_i\right), P l\left(\theta_i\right)\right],[0,1]\right) & m(\Theta)=1 & 1 \\
\text{Deng entropy} & E_d=-\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \frac{m\left(A_i\right)}{2^{A_i \mid}-1} & m(A)=\frac{2^{\left|A_i\right|-1}}{\sum\limits_{A_i \in 2^{\Theta}} 2^{A_i \mid}-1} & \log_2 \left(3^{|\Theta|}-2^{|\Theta|}\right)\\
\text{SU measurement}  & S U=\sum\limits_{\theta_i \in \Theta}\left[-\frac{P l\left(\theta_i\right)+Bel\left(\theta_i\right)}{2} \log_2 \frac{P l\left(\theta_i\right)+Bel\left(\theta_i\right)}{2}+Pl\left(\theta_i\right)-Bel\left(\theta_i\right)\right] & Bel\left(\theta_i\right)=0 ; Pl\left(\theta_i\right)=1 & |\Theta| \\
\text{JS entropy}  & H_{J S}=\sum\limits_{A_i \in 2^{\Theta}} m\left(A_i\right) \log_2 \left(\left|A_i\right|\right)-\sum\limits_{i=1}^n P l P_m\left(\theta_i\right) \log_2 P l P_m\left(\theta_i\right) & m(\Theta)=1 & 2 \log_2 (|\Theta|) \\
\hline
\end{array}
$$ -->


$\operatorname{argmax}_{\mathcal{P}}\left[-\sum\limits_{i=1}^n p\left(\theta_i\right) \log_2 p\left(\theta_i\right)\right]$ $BetP\left(\theta_i\right)=\frac{1}{|\Theta|}  \log_2 (|\Theta|)$
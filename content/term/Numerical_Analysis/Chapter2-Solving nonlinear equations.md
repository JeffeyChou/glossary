---
cover: 
categories: Numerical_Analysis
date: 2023-03-06 09:00:07
destination: 10-blog/source/_posts/数值分析
excerpt: 第二章-求解线性方程
katex: true
obsidianUIMode: source
rating: ⭐
draft: false
status: complete
tags:  
- Numerical_Analysis
title: "Chapter2-Solving nonlinear equations"
share: true
---

Continue our journey in [Chapter1-Fundanentals](term/Numerical%20Analysis/Chapter1-Fundanentals.md), the notes are based on the textbook[^2]

# The Bisection Method

Given initial interval $[a, b]$ such that $f(a) f(b)<0$ 

```Python
while (b-a)/2 > error
	c = (a+b)/2
	if f(c) == 0:
		break
	elif f(a) * f(c) < 0:
		b = c
	else:
		a = c
	end
end
```

the approximate error is $\varepsilon_{error} = \frac{b-a}{2^{n+1}}$ ($n=0$ is the initial error)

***

# Fixed-point iteration
- **fixed point**: the real number $r$ is a fixed point of the function $g$ if $g(r)=r$ 

```matlab
%Program 1.2 Fixed-Point Iteration 
%Computes approximate solution of g(x)=x 
%Input: function handle g, starting guess x0, 
% number of iteration steps k 
%Output: Approximate solution xc 
function xc=fpi(g, x0, k) 
x(1)=x0; 
for i=1:k 
	x(i+1)=g(x(i)); 
end 
xc=x(k+1);
```


For equation $x^{3}+ x -1 =0$, there exists different FPI functions, along with different convergence speed.
<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/2oAmFkg.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">different FPI functions, different convergence speed.
    </div>
</center>

- **Linear convergence**: Let $\varepsilon_{i} = \frac{\varepsilon_{i-1}}{2}$ denote the error at step $i$ of an iterative method. If
$$
\lim_{i \rightarrow \infty } \frac{\varepsilon_{i+1}}{\varepsilon_{i}} = S < 1
$$
the method is said to obey linear convergence with rate S

- Assume that $g$ is continuously differentiable, that $g(r) = r$, and that $S = |g'(r)| < 1$. Then Fixed-Point Iteration converges linearly with rate S to the fixed point $r$ for initial guesses sufficiently close to $r$.

- **Locally convergent**: An iterative method is called locally convergent to $r$ if the method converges to r for initial guesses sufficiently close to $r$ 

- **Globally convergent**: For any $x \in I$, the method converges to $r$ for any initial guesses of $x$.

> The Bisection Method is guaranteed to converge linearly. Fixed-Point Iteration is only locally convergent, and when it converges it is linearly convergent. Both methods require one function evaluation per step. The bisection cuts uncertainty by $1/2$ for each step, compared with approximately$S = |g' (r)|$ for FPI. Therefore, Fixed-Point Iteration may be faster or slower than bisection, depending on whether $S$ is smaller or larger than $1/2$. Newton’s Method, a particularly refined version of FPI, where $S$ is designed to be zero

****

# LImits of Accuracy

- **Forward and backward error**: Assume that $f$ is a function and that $r$ is a root, meaning that it satisfies $f (r) = 0$. Assume that $x_a$ is an approximation to $r$. For the root-finding problem, the <u>backward error</u> of the approximation $x_a$ is $| f (x_{a})-0| = |f(x_{a})|$ and the <u>forward error</u> is $|r - x_a|$


## Sensitivity of root-finding
A problem is called <u>sensitive</u> if small errors in the input, in this case the equation to be solved, lead to large errors in the output, or solution.

Assume that the problem is to find a root $r$ of $f (x) = 0$, but that a small change $g(x)$ is made to the input, where  is small. Let $r$ be the corresponding change in the root:
$$
f(r+ \Delta r) + \varepsilon g(r+ \Delta r) =0
$$

$$
\Delta r \approx -\varepsilon g\frac{r}{f'(r)+\varepsilon g'(r)} \approx -\varepsilon \frac{g(r)}{f'(r)}
$$

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/qgTm6pD.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Example 1.9
    </div>
</center>

- **Error magnification factor** : relative forward error / relative backward error.
$$\left|\frac{\Delta r / r}{\epsilon g(r) / g(r)}\right|=\left|\frac{-\epsilon g(r) /\left(r f^{\prime}(r)\right)}{\epsilon}\right|=\frac{|g(r)|}{\left|r f^{\prime}(r)\right|}$$

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/7jTLFOo.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Examle of Wilkinson polynomial
    </div>
</center>

The **condition number** of a problem is defined to be the maximum error magnification over all input changes, or at least all changes of a prescribed type. A problem with <u>high condition number</u> is called **ill-conditioned**, and a problem with a <u>condition number near 1</u> is called **well-conditioned**

****

# Newton's Method 

> [!tip] Newton's Method
> $$\begin{aligned}
x_0 & =\text { initial guess } \\
x_{i+1} & =x_i-\frac{f\left(x_i\right)}{f^{\prime}\left(x_i\right)} \text { for } i=0,1,2, \ldots
\end{aligned}$$


## Convergence Speed
Based on the [Rate of convergence - Wikipedia](https://en.wikipedia.org/wiki/Rate_of_convergence), the order of convergence[^1] and the rate of convergence of a convergent sequence are quantities that represent how quickly the sequence approaches its limit. A sequence $(x_{n})$ that converges to $x^{*}$ is said to have order of convergence $q \ge 1$ and the rate of convergence $\mu$ if :

$$
\lim _{n \rightarrow \infty} \frac{\left|x_{n+1}-x^*\right|}{\left|x_n-x^*\right|^q}=\mu
$$

The rate of convergence $\mu$ is also called the *asymptotic error constant.*
- $q=1$ is called _linear convergence_ if, and the sequence is said to _converge Q-linearly to $L$.
- $q=2$ is called _quadratic convergence._
- $q=3$ is called _cubic convergence._
- Etc.

Empirically, if the function $g \in C^{p}(a, b)$ is convergent to $x^*$ ，and its $p$ 
differential  $g^{(p)}(x^{*})\neq 0$, while $g^{(q)}(x^{*})= 0, q=1,2,\cdots,p-1$ then it's said that $x_{i+1}=g(x_{i})$ has $p$ order convergence speed.



Let $f \in C^{2}[a,b]$ and $f(r)=0$. If $f^{\prime}(r) \neq 0$, then Newton's Method is locally and quadratically convergent to $r$. The error $e_i$ at step $i$ satisfies
$$
\lim _{i \rightarrow \infty} \frac{e_{i+1}}{e_i^2}=\frac{f^{\prime \prime}(r)}{2 f^{\prime}(r)}
$$

If $f \in C^{(m+1)}[a,b]$, which contains a root $r$ of multiplicity $m>1$, then Modified Newton's Method's error $e_{i}$ satifies
$$
\lim_{t \rightarrow \infty} \frac{e_{i+1}}{e_{i}}= \frac{m-1}{m} 
$$
converges locally and quadratically to $r$.

If $f \in C^{(m+1)}[a,b]$, which contains a root $r$ of multiplicity $m>1$, then **Modified Newton's Method**
$$
x_{i+1}=x_i-\frac{m f\left(x_i\right)}{f^{\prime}\left(x_i\right)}
$$
converges locally and quadratically to $r$.

## Discons when Newton's Method fails
1. The initial guess is not in locally convergence domain
2. Its differential equals to 0
3. The root function contains negative result.

> [!example] An examle when the Newton's method fails
> find the root of $f(x) = 4 x^{4}- 6 x^{2}- \frac{11}{4}$ with $x_{0}=1/2$ 

# Methods without derivatives

## Secant method and variants

> [!tip] Secant method
> $$\begin{aligned}x_0, x_1 & =\text { initial guesses } \\x_{i+1} & =x_i-\frac{f\left(x_i\right)\left(x_i-x_{i-1}\right)}{f\left(x_i\right)-f\left(x_{i-1}\right)} \text { for } i=1,2,3, \ldots\end{aligned}$$


the approximate error relationship:

$$e_{i+1} \approx \left| \frac{f^{''}(r)}{2 f^{'}(r)} \right| e_{i}e_{i+1} \quad e_{i+1} \approx \left| \frac{f^{''}(r)}{2 f^{'}(r)} \right|^{\alpha-1} e_{i}^{\alpha}$$

### Three generalizations of the Secatn method 

> [!tip] False Position
> Given interval $[a, b]$ such that $f(a) f(b)<0$ for $i=1,2,3, \ldots$
$\begin{aligned} & c=\frac{b f(a)-a f(b)}{f(a)-f(b)} \\ & \text { if } f(c)=0, \text { stop, end } \\ & \text { if } f(a) f(c)<0 \\ & \quad b=c\end{aligned}$
else $a=c$
end $\quad$ end

![](private/08-Assets/Pasted%20image%2020230322113148.png)





[^1]: Wikipedia Contributors (2023) Rate of convergence. In: Wikipedia. https://en.wikipedia.org/wiki/Rate_of_convergence. Accessed 13 Mar 2023
[^2]: Sauer, Timothy. _Numerical analysis_. Addison-Wesley Publishing Company, 2011.
‌
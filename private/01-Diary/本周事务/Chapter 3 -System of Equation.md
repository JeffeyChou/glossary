---
date: 2023-03-20 08:42:09
categories: Numerical_Analysis
destination: 
excerpt: 数值分析第三章-求解线性方程组
katex: true
obsidianUIMode: source
rating: ⭐⭐
draft: true
tags:  
- Numerical_Analysis
title: "Chapter 3 -System of Equation"
share: false
---

# Gaussian elimination

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/KwY5lC7.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">text title here...
    </div>
</center>


<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/81UuLG4.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">text title here...
    </div>
</center>



# LU factorization

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/HKiZCN1.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">text title here...
    </div>
</center>


> The LU factorization is a matrix representation of Gaussian elimination. It consists of writing the coefficient matrix A as a product of a lower triangular matrix L and an upper triangular matrix U. The LU factorization is the Gaussian elimination version of a long tradition in science and engineering—breaking down a complicated object into simpler parts.

- **LU matrix** 
	An $m × n$ matrix $L$ is lower triangular if its entries satisfy $l_{i ,j} = 0$ for $i < j$. An $m \times n$ matrix $U$ is upper triangular if its entries satisfy $u_{i,j} = 0$ for $i > j$


The fact that not all matrices have an LU factorization means that more work is required before we can declare the LU factorization a general Gaussian elimination algorithm. The related problem of swamping is described in the next section. The $PA = LU$ factorization is introduced, which will overcome both problems.

# Sources to error


# PA = LU factorization 

# Iterative methods


# Methods for symmetric positive-definite matrices 

- **Definition**(Symmetric positive-definite matrices)
	The matrix $A \in  \mathbb{R}^{n \times n}$ is *symmetric* if $A^{\top}=A$ ; A is *positive-definite* if $x^{\top} A x > 0$ for all vector $x \neq 0$.

If the $n \times n$ matrix $A$ is symmetric, then $A$ is positive-definite if and only if all of its **eigenvalues** are positive.


### Cholesky factorization

- **Cholesky Factorization Theorem** 
	If $A$ is a symmetric positive-definite $n \times n$ matrix, then there exists an upper triangular$n \times n$ matrix $R$ such that $A=R^{\top}R$.


> [!attention] Cholesky factorization
> ```
> for k =1, 2, ... n
> 	if A(k,k) < 0, stop, end
> 	R(k,k)=math.sqrt(A(k,k))
> 	u=A(k, k+1:n)/R(k,k)
> 	R(k, k+1:n)=u
> 	A(k+1:n,k+1:n)=A(k+1:n,k+1:n)-np.dot(np.reverse(u),u)
> end
> ```

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/FjRovG3.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">Numerical Example
    </div>
</center>


### Conjugate Gradient Method

- **A-Conjugate**
	Let $A$ be a symmetric positive-definite $n \times n$ matrix. For two n-vectors $v$ and $w$, define the A-inner product $$(v,w)_A = v^{\top}Aw$$The vectors $v$ and $w$ are A-conjugate if $(v,w)_A = 0$.

<center>
    <img style="border-radius: 0.3125em;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);"
    src="https://search.pstatic.net/common?src=https://i.imgur.com/8HxHCKS.png">
    <br>
    <div style="color:orange; border-bottom: 1px solid #d9d9d9;
    display: inline-block;
    color: #999;
    padding: 2px;">code of CGM
    </div>
</center>

# Nonlinear Systems of Equations

Traceback (most recent call last):
  File "E:\VSCODE\Markdown\glossary\content\private\08-Assets\Scripts\auto_transfer.py", line 265, in <module>
    mmmain()
  File "E:\VSCODE\Markdown\glossary\content\private\08-Assets\Scripts\auto_transfer.py", line 176, in mmmain
    if isDraftComplete(fp):
  File "E:\VSCODE\Markdown\glossary\content\private\08-Assets\Scripts\auto_transfer.py", line 22, in isDraftComplete
    info = fetch_front_matter(fp)
  File "E:\VSCODE\Markdown\glossary\content\private\08-Assets\Scripts\utils.py", line 43, in fetch_front_matter
    front_matter = next(yaml.load_all(f, Loader=yaml.FullLoader))
StopIteration

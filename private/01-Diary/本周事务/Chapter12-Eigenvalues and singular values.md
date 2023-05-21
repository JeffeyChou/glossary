---
date: 2023-04-17 09:28:29
categories: Numerical_Analysis 
destination: 
excerpt: 奇异值分解和特征值求解
katex: true
obsidianUIMode: source
rating: ⭐⭐
draft: true
tags:  
- Numerical_Analysis 
title: "Chapter12-Eigenvalues and singular values"
share: true
---

# Eigenvalues and Singular Values


## QR algorithm
The QR algorithm is used to find eigenvalues of a matrix $A$, whose way is to locate a similar matrix whose eigenvalues are obvious. An example of the latter is *real Schur form*

- **Real Schur form**: An upper triangular matrix, except possibly for $2 \times 2$ blocks on the main diagonal.
	For example, a matrix of the form:$$\begin{pmatrix}x & x & x & x & x \\  & x & x & x & x \\  &  & x & x & x \\  &  & x & x & x \\  &  &  &  & 	x\end{pmatrix}$$
	The eigenvalues of a matrix in this formare the eigenvalues of the diagonal block—diagonal entries when the block is 1 × 1, or the eigenvalues of the 2 × 2 block in that case. Either way, the eigenvalues of the matrix are quickly calculated.


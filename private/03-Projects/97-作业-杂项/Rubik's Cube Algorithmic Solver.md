---
cover: 
date: 2023-03-09 17:14:11
destination: 
excerpt: 
katex: true
obsidianUIMode: source
rating: ⭐
refplus: true
status: inprogress
tags:  
- tag
title: Rubik's Cube Algorithmic Solver
share: false
---

# Cube Solver review
There are several methods and devices used to solve the Rubik’s cube[^2], like Mind Cuber, JPBrown's CubeSolver, GoCube, MIT Rubik's Cube Solver, Cubestorm V3—Genius World Record (Fastest Rubik’s Cube Solver) and so on.


# Color Recognition[^1]
The color recognition algorithm can be divided into five steps:
1. Converting the color space of the image: from BGR (Blue, Green, Red) to HSV (Hue, Saturation, Value). The advantage is that the color can be modified using only one variable: Hue. The other two parameters are used for variating shadow and shine.
2. Image filtering: using EmguCV library, SmoothMedian filter, for reducing the salt and pepper noise.
3. Selecting the regions of interest from the four images. These regions consist of one pixel on each piece of the cube, due to the previously applied filter.
4. Color identification, based on the 3 values of the pixel: hue, saturation, and value. For each of the six colors, there are 3 intervals, as shown in the table below.

| Color  | Hue     | Saturation | Value  |
| ------ | ------- | ---------- | ------ |
| White  | 0-180   | 0-80       | 50-255 |
| Yellow | 17-36   | 30-255     | 0-255  |
| Orange | 0-16    | 50-255     | 50-255 |
| Red    | 120-177 | 59-255     | 0-255  |
| Green  | 40-94   | 50-255     | 0-255  |
| Blue   | 95-160  | 50-255     | 0-255  |

5. Analysis of the elements: from the 4 vectors and saving in other 6 vectors of 9 elements each, for every face of the cube. The color vectors are mapped to the cube faces orientation. For example, if the centerpiece of the upper face is red, all the red stickers will be mapped as upper stickers.

# Code
- the two-phase-algrithm(kociemba) with less than 19 moves using python: [RubiksCube-TwophaseSolver](https://github.com/hkociemba/RubiksCube-TwophaseSolver)

- A pure Python and pure C ports of Kociemba's algorithm for solving Rubik's cube: [kociemba](https://github.com/muodov/kociemba)

- A webcam-based 3x3x3 rubik's cube solver written in Python 3 and OpenCV: [qbr](https://github.com/kkoomen/qbr)

# Reference
[^1]: V. Dan, G. Harja and I. Naşcu, "Advanced Rubik's Cube Algorithmic Solver," 2021 7th International Conference on Automation, Robotics and Applications (ICARA), Prague, Czech Republic, 2021, pp. 90-94, doi: 10.1109/ICARA51699.2021.9376564.
[^2]: Andrew, A.M. _et al._ (2021). Prototype Design for Rubik’s Cube Solver. In: Bahari, M.S., Harun, A., Zainal Abidin, Z., Hamidon, R., Zakaria, S. (eds) Intelligent Manufacturing and Mechatronics. Lecture Notes in Mechanical Engineering. Springer, Singapore. https://doi.org/[10.1007/978-981-16-0866-7_3](https://doi.org/10.1007/978-981-16-0866-7_3)


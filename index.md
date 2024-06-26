---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
  - /404.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a PhD student at [Center on Frontiers of Computing Studies (CFCS)](http://cfcs.pku.edu.cn/) in Peking University, China, supervised by Prof. [Baoquan Chen](https://baoquanchen.info/). As a member of [Visual Computing and Learning Lab](https://vcl.pku.edu.cn/), I am also advised by Dr. [Bin Wang](https://binwangbfa.github.io/) and Prof. [Mengyu Chu](https://rachelcmy.github.io/). In terms of fluid animation, I am advised remotely by Prof. [Bo Zhu](https://faculty.cc.gatech.edu/~bozhu/) at Georgia Tech, USA. Earlier, I graduated from Turing Class, Peking University in July 2020 and earned dual bachelor's degrees in computer science and physics.

My research interests lie in computer graphics and computational physics. In particular, I devote myself to physically-based simulation during the PhD career. My academic ambition is to reproduce kinetics and dynamics of the real world in a virtual counterpart, building theoretical foundations to reveal the physical principles. In the past years, I have made some advances in the simulation of natural phenomena, especially magnetic interactions. I would also love to contribute on developing simulation frameworks of both fluid and cloth in the future.


# News
- *2023/03* &nbsp;🎉🎉 Our two papers have been conditionally accepted to SIGGRAPH 2024 and SPM 2024.
- *2024/02* &nbsp;🎉🎉 I will present a free online course *GAMES001: Mathematics in Computer Graphics* in Chinese from Mar. 2024.
- *2024/01* &nbsp;🎉🎉 Our bioengineering paper in collaboration with ETH Zurich has been accepted to a Nature sub-journal.
- *2023/08* &nbsp;🎉🎉 Our paper has been conditionally accepted to SIGGRAPH Asia 2023.

# Publications

{% include_relative _includes/publications.md %}

# Honors and Awards
- *2022/08* &nbsp;Winner of [**Style3D Graduate Fellowship**](https://home.style3d.com/about/fellowshipprogram) (10 recipients nationwide per year)
- *2021/01* &nbsp;Winner of [**ByteDance Scholars Program**](https://ur.bytedance.com/scholarship) (10 recipients nationwide per year)

# Education
- *2020/07* &nbsp;**B.S. in Physics (Dual Degree)** &nbsp;\|&nbsp; [School of Physics, Peking University](https://www.phy.pku.edu.cn/), China
- *2020/07* &nbsp;**B.S. in Computer Science** &nbsp;\|&nbsp; [School of EECS, Peking University](https://eecs.pku.edu.cn/), China &nbsp;\|&nbsp; Advisor: Prof. [Baoquan Chen](https://cfcs.pku.edu.cn/baoquan/)

# Work Experience
- *2019/08–2019/08* &nbsp;**Research assistant** &nbsp;\|&nbsp; [Department of CS, Dartmouth College](https://web.cs.dartmouth.edu/), USA &nbsp;\|&nbsp; Advisor: Prof. [Bo Zhu](https://cs.dartmouth.edu/~bozhu/)
- *2018/07–2021/06* &nbsp;**Research assistant** &nbsp;\|&nbsp; [AICFVE, Beijing Film Academy](https://fve.bfa.edu.cn/), China &nbsp;\|&nbsp; Advisor: Dr. [Bin Wang](https://binwangbfa.github.io/)

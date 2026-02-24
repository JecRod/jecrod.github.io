---
title: "CTF Cyber Warrrior Writeup"
date: 2026-02-23 10:00:00 +0800
categories: [CTF]
tags: [Windows, Easy]
image:
  path: /assets/images/cyberwarrior.jpeg
  alt: CyberWarrior
---

## Overview

This writeup covers my solutions for CTF Cyber Warrior 2025 and explains the steps I used to solve each challenge.

## 1. MARK THE MOMENT

![Challenge 1 Screenshot](/assets/images/posts/ctf-cyber-warrior-2025/challenge1.png){: .w-75 }

### Solution Steps

1. First, take the date provided in the question.
2. Convert the given date into a Unix timestamp using an online converter or command line.
3. After obtaining the Unix timestamp (`1752627600`), submit the answer in the required format:


``` bash
nmap -sC -sV 10.10.10.X
```
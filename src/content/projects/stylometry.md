---
title: Binary Stylometry Attribution
summary: Authorship attribution from compiled binaries, for both benign code and malware, using Ghidra pseudocode and GraphCodeBERT.
year: 2026
tags: [Malware attribution, Reverse engineering, Transformers]
repo: https://github.com/antoniol00/Malware-Stylometry-Attribution
---

Source files are compiled at several optimisation levels (O0–O3), decompiled with Ghidra in headless mode and encoded with GraphCodeBERT to train a style classifier. Includes inference on new files and explainability reports (confusion matrices, confidence histograms, token importance).

---
title: AMD-GAN
summary: Class-specific adaptive WGAN-GP framework that generates configurable synthetic network traffic to correct extreme class imbalance in intrusion detection.
year: 2026
tags: [GANs, NIDS, Class imbalance, TensorFlow]
repo: https://github.com/antoniol00/AMD-GAN
links:
  - label: Zenodo
    href: https://doi.org/10.5281/zenodo.19212815
publications: [J3]
featured: true
---

Each attack class gets its own dedicated generator, with adaptive configurations for minority classes (smaller batches, more epochs, stronger regularisation). Synthetic data quality is validated with Train-Synthetic-Test-Real protocols, and the resulting detectors are stress-tested against adversarial traffic. Validated on CIC-IDS2017.

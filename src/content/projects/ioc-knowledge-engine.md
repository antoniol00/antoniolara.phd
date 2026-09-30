---
title: IoC Knowledge Engine
summary: Proof of concept of a knowledge-generation engine that correlates indicators of compromise and telemetry with MITRE ATT&CK using semantic search and a local LLM.
year: 2026
tags: [Threat intelligence, MITRE ATT&CK, LLMs, FAISS]
repo: https://github.com/antoniol00/IoC-Knowledge-Engine
---

Network traces, malware classifications and honeypot logs are matched against ATT&CK techniques via FAISS and sentence-transformers; a local LLM then produces a structured analysis of TTPs, risks and recommendations. Ships with simulated scenarios to try end to end.

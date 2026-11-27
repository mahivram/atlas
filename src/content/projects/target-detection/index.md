---
title: Target Detection
description: A practical YOLO26 computer-vision project, documented from detection fundamentals through dataset setup, training, evaluation, and live inference.
date: 2026-11-27
status: active
tags:
  - Computer vision
  - YOLO26
  - Python
featured: true
group: Overview
order: 0
---

## Project overview

This project fine-tunes an Ultralytics YOLO26 model to find red circular targets in a browser demo. It documents the complete computer-vision pipeline: collecting images, annotating examples, preparing splits, training, evaluating, and running inference.

The current dataset contains 10 labeled images: 6 training, 3 validation, and 1 test image. This is enough to demonstrate the steps, but far too little to claim reliable generalization.

### Project files

| File or folder | Role |
| --- | --- |
| `game/` | Local Dot Pop demo for controlled sample collection. |
| `collection/` | Original screenshots used in the dataset. |
| `dataset/` | Roboflow export, split images, labels, and `data.yaml`. |
| `train.py` | Fine-tunes the `yolo26s.pt` checkpoint. |
| `screen_detector.py` | Runs live screen inference and draws detections. |
| `target_clicker.py` | Optional Windows mouse automation based on detections. |

The **Concepts** section explains detection, data, training, evaluation, and inference theory. The
**Implementation** section follows the project from environment setup through running and reviewing
the finished model.

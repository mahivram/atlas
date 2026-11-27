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

## Theory: how object detection works

Object detection combines two jobs: **recognizing what is present** and **locating where it appears**. For every detected object, the model returns a class, a confidence score, and a bounding box. An image may contain no matching objects, one object, or many.

This differs from:

- **Image classification**, which labels the whole image but does not locate instances.
- **Object detection**, which returns a class and rectangular location for each instance.
- **Instance segmentation**, which additionally predicts a pixel-level shape for each instance.

### From pixels to predictions

A detector converts an image into numerical input, extracts visual features at multiple scales, and predicts object classes and locations. Post-processing applies a confidence threshold and resolves overlapping detections. The result is a set of predictions, not a guarantee that every prediction is correct.

Training compares predictions with human annotations. A pretrained checkpoint provides useful visual features as a starting point; adapting it to a smaller, focused dataset is called **transfer learning**.

### Important terms

| Term | Meaning |
| --- | --- |
| Class | The category assigned to an object. This project has one class: `Target-Detection`. |
| Bounding box | A rectangle around an object, represented by coordinates. |
| Confidence | A score used to rank or filter predictions; not necessarily a calibrated probability. |
| Precision | The share of predicted detections that match labeled objects. |
| Recall | The share of labeled objects that the model finds. |
| IoU | Intersection over Union: overlap of a predicted box and its reference box. |
| mAP | Mean Average Precision, a summary over precision-recall and overlap thresholds. |

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

Use the guide sections to set up the environment, prepare data, train and evaluate the model, and review the limits before relying on predictions.

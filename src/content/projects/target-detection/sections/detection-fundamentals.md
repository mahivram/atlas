---
title: Object detection fundamentals
description: Understand how a detector identifies objects, localizes them, and represents predictions.
group: Concepts
order: 1
---

## What object detection predicts

Object detection combines **recognition** with **localization**. For each detected object, a model
returns a class, a confidence score, and a bounding box. An image may contain no matching objects,
one object, or many.

This differs from:

- **Image classification**, which labels an image as a whole but does not locate instances.
- **Object detection**, which returns a class and rectangular location for each instance.
- **Instance segmentation**, which additionally predicts a pixel-level shape for each instance.

## From pixels to predictions

A detector converts an image into numerical input, extracts visual features, and predicts object
classes and locations. Post-processing filters predictions by confidence and resolves overlapping
boxes. The result is a set of candidate predictions, not a guarantee that every prediction is
correct.

The target detector is trained for one class, `Target-Detection`. It is specialized for red circular
targets in the supplied demo, not arbitrary objects or scenes.

## Prediction terms

| Term | Meaning |
| --- | --- |
| Class | The category assigned to an object. |
| Bounding box | A rectangle around an object, represented by coordinates. |
| Confidence | A score used to rank or filter a prediction; not necessarily a calibrated probability. |
| IoU | Intersection over Union: overlap of a predicted box and its reference box. |
| Precision | The share of predicted detections that match labeled objects. |
| Recall | The share of labeled objects the model finds. |
| mAP | Mean Average Precision, a summary across precision-recall and overlap thresholds. |

These concepts connect the annotation format, training objective, evaluation metrics, and inference
thresholds described in the other guide topics.

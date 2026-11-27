---
title: Detection evaluation metrics
description: Learn how IoU, precision, recall, and mean Average Precision describe detector quality.
group: Concepts
order: 4
---

## Decide when a prediction matches

**Intersection over Union (IoU)** measures overlap between a predicted box and a labeled box:

`IoU = area of intersection / area of union`

A prediction is considered a match only when its class and overlap satisfy the evaluation rules.
The chosen IoU threshold therefore affects which detections count as correct.

## Precision and recall

- **Precision** asks: of the detections the model predicted, how many were correct?
- **Recall** asks: of the labeled objects, how many did the model find?

Increasing the confidence threshold usually removes weaker predictions, which can increase precision
while reducing recall. Neither measure alone describes every use case.

## Average Precision and mAP

**Average Precision (AP)** summarizes a precision-recall curve for a class under a specified
evaluation setup. **Mean Average Precision (mAP)** averages AP across classes and, for some reported
metrics, across IoU thresholds.

Metrics are only meaningful with context: dataset version, split, class definitions, confidence
handling, and IoU thresholds. Keep the test split independent; repeatedly tuning against it turns it
into development data. This project's single-image test set is far too small for a dependable metric.

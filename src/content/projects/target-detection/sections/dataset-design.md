---
title: Dataset design and labels
description: Learn why representative sampling, consistent boxes, and independent splits matter.
group: Concepts
order: 2
---

## Examples define the task

A model can only learn patterns represented in its training examples. Useful data varies the
conditions expected at inference, such as object position, scale, count, screen resolution, and
background. Empty scenes are valuable when false detections in those scenes matter.

Near-identical frames do not provide the same information as genuinely different examples. If
related frames are split across training and test data, evaluation can overstate how well the model
generalizes.

## Labels are the learning signal

Each object annotation communicates both its class and location. A class policy defines which
instances count as the target; consistent box boundaries make the training signal repeatable. Missing
objects, duplicate boxes, and incorrect classes can look like model errors later.

This project uses one class, `Target-Detection`, with class ID `0`. The YOLO dataset format stores
each object as a class ID and normalized center coordinates, width, and height.

## Keep data splits independent

- **Training** examples update model weights.
- **Validation** examples help compare runs and make development decisions.
- **Test** examples are reserved for a final, independent check.

The current export contains 10 images: 6 training, 3 validation, and 1 test. This is enough to
exercise the pipeline, but one test image cannot establish reliable performance.

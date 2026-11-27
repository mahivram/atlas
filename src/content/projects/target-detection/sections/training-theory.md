---
title: Transfer learning and training
description: Understand pretrained weights, optimization, epochs, and overfitting before training.
group: Concepts
order: 3
---

## Start from learned features

Training a detector from scratch requires enough varied data to learn useful visual features.
**Transfer learning** starts from a pretrained checkpoint and adapts it to the target classes using
the project's labeled examples. It can make a small task practical, but does not remove the need for
representative data.

## What happens during training

The model predicts boxes and classes for training images. A loss function compares those predictions
with the labeled targets, and optimization updates model weights to reduce the errors.

- An **epoch** is one pass through the training dataset.
- A **batch** is the group of examples processed together for an update.
- **Image size** controls the resolution used by the model and affects detail, memory, and speed.
- **Augmentation** creates varied training views; it should preserve the target's meaning and label.

These settings trade off compute, convergence, and generalization. More epochs do not guarantee a
better detector.

## Generalization and overfitting

A model overfits when it learns details specific to training images instead of patterns that transfer
to new examples. Validation behavior, rendered predictions, and the gap between training and
validation results help reveal this. Improving the dataset or labels may be more useful than simply
increasing training time.

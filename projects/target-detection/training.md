---
description: Training setup, monitoring, and reproducibility for a detector.
---

# Model training

Training adjusts model parameters so predictions better match labeled examples. A suitable pretrained detector can be a useful starting point, but the model choice should follow the target, dataset size, runtime, and deployment constraints.

## Record the setup

For each run, record the dataset version and split, model and pretrained weights, input size, training configuration, software environment, and random seed when supported. Save the resulting checkpoint and training logs.

## Monitor behavior

Track training and validation metrics together. If training performance improves while validation performance stalls or declines, the model may be overfitting or the validation data may differ from the training data.

Change a small number of factors at a time. This makes comparisons easier to interpret than changing the model, data, and settings simultaneously.

## Avoid tuning on the test set

Use the validation set to make training decisions. Reserve the test set for final evaluation; repeatedly tuning against it makes it part of the development process and weakens its value as an independent check.

**Output:** a saved checkpoint and enough configuration to reproduce and evaluate the run.

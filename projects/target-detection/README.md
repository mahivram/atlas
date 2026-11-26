---
description: Project overview and reading path for Target Detection.
---

# Target Detection

An in-progress project to understand and build an object-detection system. These pages document the ideas and workflow first, then can be extended with implementation details, experiments, and results as they become available.

## Project scope

The project follows the full detection pipeline: define what should be detected, collect representative images, label objects, prepare datasets, train a model, and evaluate its behavior on new images.

The target classes, dataset, model, and deployment environment are still to be decided. No model results or dataset measurements are assumed in these notes.

## Reading path

1. [Object detection fundamentals](object-detection.md) — what detection predicts and how it differs from classification.
2. [End-to-end workflow](workflow.md) — the stages and outputs of a detection project.
3. [Data collection](data-collection.md) — building a representative image dataset.
4. [Annotation and labels](annotation.md) — defining consistent object boxes and classes.
5. [Dataset preparation](dataset-preparation.md) — validating labels and creating reliable data splits.
6. [Model training](training.md) — training choices, monitoring, and reproducibility.
7. [Evaluation](evaluation.md) — metrics and error analysis.
8. [Inference and iteration](inference-and-iteration.md) — applying the model and using failures to improve it.

## Current status

The project is at the learning and planning stage. The next implementation decisions are to define the target classes and use case, then select data sources and an annotation format.

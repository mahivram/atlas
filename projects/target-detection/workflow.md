---
description: The stages of an object-detection project and their outputs.
---

# End-to-end workflow

Object-detection quality depends on the complete pipeline. Each stage produces inputs for the next, so errors in definitions, images, or labels can limit model performance regardless of training choices.

| Stage | Main work | Output |
| --- | --- | --- |
| 1. Define the problem | Specify target classes, intended use, and what counts as an instance. | A written labeling and evaluation scope. |
| 2. Collect data | Gather varied images representative of the expected environment. | A traceable image collection. |
| 3. Annotate | Mark each in-scope object with a class and bounding box. | Reviewed labels paired with images. |
| 4. Prepare data | Validate labels and split data for training, validation, and testing. | Versioned, checked dataset splits. |
| 5. Train | Fit a model and record its configuration. | A reproducible model checkpoint. |
| 6. Evaluate | Measure predictions on held-out images and inspect errors. | Metrics and documented failure cases. |
| 7. Run inference | Apply the model to new images or video frames. | Detections usable by the intended application. |
| 8. Iterate | Use observed failures to improve data or settings and repeat evaluation. | A traceable next version. |

## Order matters

Decide the target definition before annotation. Establish the data split before model comparisons. Keep a test set separate from choices made during training so the final evaluation remains a fair estimate of generalization.

## Project checkpoints

For each iteration, record the dataset version, label rules, split method, model and settings, evaluation setup, and key errors. This makes changes comparable and helps identify whether an improvement came from better data, labels, or training.

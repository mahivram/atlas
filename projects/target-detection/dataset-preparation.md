---
description: Dataset validation, splitting, and preparation for training.
---

# Dataset preparation

Prepare data only after the images and labels follow stable rules. Keep each image paired with its annotations and make every transformation reproducible.

## Create data splits

- **Training set:** used to fit model parameters.
- **Validation set:** used to compare configurations and make training decisions.
- **Test set:** held back for a final evaluation.

Choose a split method that reflects the data source. If several images come from the same video, session, or location, keep related examples in the same split where possible. Otherwise, near-duplicates can appear in both training and evaluation and inflate results.

## Validate inputs

Check that:

- Every annotation references an existing image.
- Coordinates fit within image bounds and use the expected box format.
- Class identifiers match the class definition.
- Images decode and have supported dimensions and color modes.
- Split counts and class distributions are understood.

Apply augmentation only to training data. Geometric transforms must update bounding boxes along with the image. Keep the original data and record how derived examples were produced.

**Output:** versioned training, validation, and test splits that can be recreated.

---
description: Consistent object definitions, bounding boxes, and label review.
---

# Annotation and labels

Annotation converts images into supervised examples. Each in-scope object is assigned a class and a bounding box. Consistent rules are more valuable than subjective precision: annotators should make the same decision for the same kind of image.

## Establish labeling rules

Define:

- Which visible objects belong to each class.
- Whether small, truncated, or partly occluded instances are included.
- How to treat ambiguous, overlapping, or difficult objects.
- How boxes should fit object boundaries.
- Which label format and class identifiers the training tool expects.

Write the rules down and use example images to resolve ambiguity before labeling the full dataset.

## Draw and check boxes

Boxes should enclose the visible object closely, without cutting off visible parts or including large amounts of background. Assign exactly the intended class and follow the same rule for every image.

Review a sample for:

- Missed objects and extra boxes.
- Incorrect or inconsistent classes.
- Boxes that are too loose, too tight, or shifted.
- Invalid coordinates, duplicate labels, or unsupported classes.

**Output:** image annotations that follow a documented rule set and the chosen tool's format.

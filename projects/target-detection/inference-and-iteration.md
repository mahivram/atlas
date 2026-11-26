---
description: Applying a trained detector and improving it from observed failures.
---

# Inference and iteration

Inference applies a trained detector to an image or video frame. A complete inference path may resize and normalize the input, run the model, filter predictions, and map boxes back to the original image coordinates.

## Check the full path

Test more than model accuracy:

- Supported image and video formats.
- Correct preprocessing and box-coordinate mapping.
- Confidence and duplicate-box thresholds.
- Latency and memory use on the intended hardware.
- Behavior when the image contains no target or invalid input.

## Improve from evidence

Use evaluation examples to choose the next change. Missed small objects may indicate a lack of representative small-object examples; false alarms may expose confusing backgrounds or unclear label rules. Verify the cause before changing the dataset or model.

Keep the test set fixed for final comparisons. Version each dataset and record changes to annotations, model settings, and evaluation so improvements remain traceable.

**Output:** a usable inference path and a documented next iteration based on observed failures.

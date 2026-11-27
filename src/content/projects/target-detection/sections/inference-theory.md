---
title: Inference and confidence thresholds
description: Understand prediction-time preprocessing, filtering, and real-time screen inference.
group: Concepts
order: 5
---

## Inference applies the trained model

Inference runs a trained checkpoint on new input. The image is prepared in the format and size
expected by the model, predictions are produced, and post-processing returns candidate boxes and
classes. Different screen layouts or visual conditions can change the input distribution from the
training data.

## Confidence and overlapping boxes

The confidence threshold controls which candidate predictions are retained. A lower threshold
typically keeps more candidates, including weaker ones; a higher threshold filters more aggressively
and may remove real objects. A confidence score is a ranking signal, not automatically a calibrated
probability of correctness.

Detectors also use non-maximum suppression (NMS) or related post-processing to reduce duplicate
overlapping boxes. These choices affect the final detections shown to a user.

## Live capture adds system constraints

Screen inference repeatedly captures frames, converts them to the model's expected color format,
runs prediction, and renders results. Model speed, capture resolution, and display selection all
affect responsiveness. A working still-image prediction is a useful check before investigating the
additional behavior of a live loop.

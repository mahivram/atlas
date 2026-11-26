---
description: Detection metrics and practical error analysis.
---

# Evaluation

Evaluate on data that was not used to fit the model. A correct detection must get the class right and place a box that overlaps the labeled object sufficiently under the chosen matching rule.

## Useful measures

- **Precision** describes how many predicted detections are correct.
- **Recall** describes how many labeled objects the model finds.
- **Intersection over Union (IoU)** measures overlap between a predicted box and a labeled box.
- **Average Precision (AP)** summarizes precision across confidence thresholds for a class; mean Average Precision (mAP) averages AP across classes under a stated IoU protocol.

Metrics are comparable only when the dataset split, class set, IoU protocol, confidence handling, and evaluation implementation are clear.

## Inspect errors

Review predictions alongside labels. Group errors into missed objects, false alarms, incorrect classes, poorly placed boxes, and duplicate detections. Look for patterns by size, lighting, background, or occlusion.

Report the evaluation setup and results together with representative examples. Metrics summarize behavior; error cases help decide what to improve.

**Output:** a reproducible evaluation and a prioritized list of observed failure modes.

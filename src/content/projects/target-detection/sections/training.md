---
title: Train the model
description: Run the training script and preserve the checkpoint and configuration for reproducibility.
group: Implementation
order: 8
---

## Start a training run

Run the training script from the target-detection project directory so relative dataset and output paths resolve correctly:

```powershell
python train.py
```

The checked-in configuration uses:

| Setting | Value |
| --- | --- |
| Starting weights | `yolo26s.pt` |
| Dataset config | `./dataset/data.yaml` |
| Epochs | `100` |
| Image size | `640` |
| Batch size | `4` |
| Device | CPU |
| Workers | `0` |

## Preserve the run details

Ultralytics saves output under `runs/detect/` and may increment the run name when a folder already exists. Use the actual path printed by the run, rather than assuming a fixed suffix.

Keep the best checkpoint with the configuration and metrics needed to explain the run. Update `MODEL_PATH` in `screen_detector.py` and `target_clicker.py` to the checkpoint you intend to use.

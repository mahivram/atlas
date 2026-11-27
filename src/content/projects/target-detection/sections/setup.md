---
title: Setup
description: Create the Python environment and check the dataset paths before training.
group: Getting started
order: 1
---

## Requirements

Training and inference use Python with Ultralytics, OpenCV, MSS, and NumPy. The optional clicker additionally imports PyAutoGUI and is Windows-specific because it uses Windows APIs for Escape-key and DPI handling.

From the project directory, create and activate a virtual environment:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install ultralytics opencv-python mss numpy pyautogui
```

On macOS or Linux, use `python3 -m venv .venv` and `source .venv/bin/activate` instead. The training script can run on CPU; GPU training requires a compatible PyTorch build and a deliberate change to the `device` argument in `train.py`.

The first load of `yolo26s.pt` may download pretrained weights. Ensure the machine can access the model source or make the weights available locally.

## Verify the dataset configuration

Before training, confirm that `dataset/train/images`, `dataset/valid/images`, and `dataset/test/images` each have matching label folders. `dataset/data.yaml` declares the split paths and class names.

1. Check that each configured path resolves from the YAML file's location.
2. Confirm image/label pairs exist and class ID `0` means `Target-Detection`.
3. Check labels and split counts.
4. Keep related or near-duplicate frames in one split to prevent leakage.

The screen tools use a hard-coded `MODEL_PATH`. Update it to the checkpoint you intend to use after training.

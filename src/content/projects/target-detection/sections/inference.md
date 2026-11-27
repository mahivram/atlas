---
title: Run inference
description: Start with still images, then inspect the live screen preview before any automation.
group: Results
order: 5
---

## Test saved images

Test a saved image first. The Ultralytics Python API can run prediction on a directory and save a rendered result:

```powershell
python -c "from ultralytics import YOLO; YOLO(r'PATH\TO\best.pt').predict(source=r'dataset\test\images', conf=0.25, imgsz=640, save=True)"
```

Replace `PATH\TO\best.pt` with the actual checkpoint path. Inspect the saved result before trying live capture.

## Preview the screen

`screen_detector.py` captures monitor index `1`, predicts at confidence `0.25` and image size `640`, then displays boxes in an OpenCV window:

```powershell
python screen_detector.py
```

Press **Q** in the preview to stop. If it captures the wrong display, update the monitor selection; MSS uses index `0` for the combined virtual desktop and other indexes for individual monitors.

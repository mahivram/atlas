---
title: Data collection and annotation
description: Collect varied examples, annotate consistently, and preserve independent evaluation splits.
group: Getting started
order: 2
---

## Collect representative examples

The current images show red targets on the dark grid of the Dot Pop demo. For the next dataset version, vary target position, scale, count, screen resolution, browser layout, and backgrounds. Include empty frames if false detections on empty screens matter.

The local demo can be served from the project directory:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/game/`, capture permitted examples, then stop the server with `Ctrl+C`.

## Keep labels and splits consistent

Use one class name consistently, include each in-scope target once, keep annotations close to the visible object, and review labels for missed or duplicate targets. Split related video frames together.

The current Roboflow export used auto-orientation and a `512 × 512` stretch resize without export-time augmentation. Training separately specifies `imgsz=640`; record the settings from each run's `args.yaml`.

The dataset metadata records a **CC BY 4.0** license. Preserve attribution and license terms when redistributing it.

---
title: Limits and responsible use
description: Understand dataset limits and the behavior of optional mouse automation before running the tools.
group: Implementation
order: 11
---

## Limits of this model

This model is specialized for examples from one small demo dataset. It is not a general detector for arbitrary objects, games, screens, or real-world scenes. The dataset size and test split are especially inadequate for a claim of dependable accuracy. Improve the dataset and evaluation before adapting the project to a new setting.

## Optional mouse automation

`target_clicker.py` moves the cursor to a selected detection and can send real left-clicks. **Its current `DEBUG_MODE` is `False`, so it is configured to click, not merely preview.** Do not run it until you have reviewed the settings and confirmed the selected monitor and model. For a non-clicking check, change `DEBUG_MODE` to `True` first.

Use the clicker only with the local demo or another environment where automation is explicitly allowed, and stop it with **Escape**. Verify cursor coordinates in the intended display setup before any permitted live use.

## References

- [Ultralytics object detection task](https://docs.ultralytics.com/tasks/detect/)
- [Ultralytics training mode](https://docs.ultralytics.com/modes/train/)
- [Roboflow dataset export](https://universe.roboflow.com/mahivs-workspace/target_detection-evks8)
- [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)

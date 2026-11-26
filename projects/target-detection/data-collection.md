---
description: Planning and collecting representative images for detection.
---

# Data collection

The dataset should reflect the images the detector is expected to encounter. Variation is important: backgrounds, lighting, camera angles, distance, object scale, motion blur, and partial occlusion can all change how an object appears.

## Before collecting

Write down:

- The target classes and an unambiguous description of each.
- The intended environment and image or video sources.
- What counts as a valid object instance, including partially visible cases.
- Any usage, privacy, licensing, or storage constraints.

## Build a useful collection

- Include realistic examples across the expected conditions.
- Include images with no target objects when those occur in normal use.
- Avoid collecting only near-identical frames; they add volume without much variety.
- Track image source and collection context where appropriate.
- Remove corrupt files and check for exact or near duplicates.

## Review the collection

Summarize class counts and inspect a sample of images before annotation. Check for missing conditions, class imbalance, and unintended duplicates. If images come from videos or related bursts, keep related frames together when creating data splits to reduce leakage.

**Output:** a traceable collection of images with documented scope and usage rights.

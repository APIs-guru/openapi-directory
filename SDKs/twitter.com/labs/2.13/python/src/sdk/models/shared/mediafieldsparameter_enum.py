from dataclasses import dataclass, field
from enum import Enum

class MediaFieldsParameterEnum(str, Enum):
    MEDIA_KEY = "media_key"
    DURATION_MS = "duration_ms"
    HEIGHT = "height"
    PREVIEW_IMAGE_URL = "preview_image_url"
    TYPE = "type"
    URL = "url"
    WIDTH = "width"
    PUBLIC_METRICS = "public_metrics"
    NON_PUBLIC_METRICS = "non_public_metrics"
    ORGANIC_METRICS = "organic_metrics"
    PROMOTED_METRICS = "promoted_metrics"


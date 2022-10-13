from dataclasses import dataclass, field
from typing import Enum

class WebhookEnumVersionEnum(str, Enum):
    V1 = "v1"
    V2 = "v2"


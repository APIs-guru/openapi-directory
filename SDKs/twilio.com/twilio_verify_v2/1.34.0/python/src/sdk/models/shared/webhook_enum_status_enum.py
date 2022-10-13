from dataclasses import dataclass, field
from typing import Enum

class WebhookEnumStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


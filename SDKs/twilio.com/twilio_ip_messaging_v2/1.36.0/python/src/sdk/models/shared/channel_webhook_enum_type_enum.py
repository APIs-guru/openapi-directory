from dataclasses import dataclass, field
from typing import Enum

class ChannelWebhookEnumTypeEnum(str, Enum):
    WEBHOOK = "webhook"
    TRIGGER = "trigger"
    STUDIO = "studio"


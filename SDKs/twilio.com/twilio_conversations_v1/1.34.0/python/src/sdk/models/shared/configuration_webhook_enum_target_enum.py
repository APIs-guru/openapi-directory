from dataclasses import dataclass, field
from typing import Enum

class ConfigurationWebhookEnumTargetEnum(str, Enum):
    WEBHOOK = "webhook"
    FLEX = "flex"


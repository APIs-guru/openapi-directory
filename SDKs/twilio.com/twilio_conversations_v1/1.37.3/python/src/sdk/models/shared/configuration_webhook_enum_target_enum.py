from dataclasses import dataclass, field
from enum import Enum

class ConfigurationWebhookEnumTargetEnum(str, Enum):
    WEBHOOK = "webhook"
    FLEX = "flex"


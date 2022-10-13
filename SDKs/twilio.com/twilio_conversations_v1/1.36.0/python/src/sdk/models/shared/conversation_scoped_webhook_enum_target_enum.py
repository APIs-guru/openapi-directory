from dataclasses import dataclass, field
from typing import Enum

class ConversationScopedWebhookEnumTargetEnum(str, Enum):
    WEBHOOK = "webhook"
    TRIGGER = "trigger"
    STUDIO = "studio"


from dataclasses import dataclass, field
from enum import Enum

class ConversationScopedWebhookEnumTargetEnum(str, Enum):
    WEBHOOK = "webhook"
    TRIGGER = "trigger"
    STUDIO = "studio"


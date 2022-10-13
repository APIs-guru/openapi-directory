from dataclasses import dataclass, field
from typing import Enum

class ServiceConversationScopedWebhookEnumTargetEnum(str, Enum):
    WEBHOOK = "webhook"
    TRIGGER = "trigger"
    STUDIO = "studio"


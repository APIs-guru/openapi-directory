from dataclasses import dataclass, field
from enum import Enum

class ServiceConversationScopedWebhookEnumTargetEnum(str, Enum):
    WEBHOOK = "webhook"
    TRIGGER = "trigger"
    STUDIO = "studio"


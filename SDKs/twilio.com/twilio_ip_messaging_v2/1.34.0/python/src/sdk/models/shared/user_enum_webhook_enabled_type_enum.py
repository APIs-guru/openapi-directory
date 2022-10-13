from dataclasses import dataclass, field
from typing import Enum

class UserEnumWebhookEnabledTypeEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


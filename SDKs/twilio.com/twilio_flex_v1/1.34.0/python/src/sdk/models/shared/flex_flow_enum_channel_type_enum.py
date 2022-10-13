from dataclasses import dataclass, field
from typing import Enum

class FlexFlowEnumChannelTypeEnum(str, Enum):
    WEB = "web"
    SMS = "sms"
    FACEBOOK = "facebook"
    WHATSAPP = "whatsapp"
    LINE = "line"
    CUSTOM = "custom"


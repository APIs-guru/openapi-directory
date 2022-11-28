from dataclasses import dataclass, field
from enum import Enum

class InteractionChannelEnumTypeEnum(str, Enum):
    VOICE = "voice"
    SMS = "sms"
    EMAIL = "email"
    WEB = "web"
    WHATSAPP = "whatsapp"
    CHAT = "chat"
    MESSENGER = "messenger"
    GBM = "gbm"


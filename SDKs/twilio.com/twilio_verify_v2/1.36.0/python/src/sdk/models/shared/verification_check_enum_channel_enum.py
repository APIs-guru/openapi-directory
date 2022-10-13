from dataclasses import dataclass, field
from typing import Enum

class VerificationCheckEnumChannelEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"
    SNA = "sna"


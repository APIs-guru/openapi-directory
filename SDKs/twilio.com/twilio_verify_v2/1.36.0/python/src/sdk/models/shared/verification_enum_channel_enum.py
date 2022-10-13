from dataclasses import dataclass, field
from typing import Enum

class VerificationEnumChannelEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"
    SNA = "sna"


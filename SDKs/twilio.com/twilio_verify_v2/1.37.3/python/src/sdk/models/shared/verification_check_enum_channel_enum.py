from dataclasses import dataclass, field
from enum import Enum

class VerificationCheckEnumChannelEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"
    SNA = "sna"


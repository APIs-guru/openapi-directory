from dataclasses import dataclass, field
from enum import Enum

class VerificationEnumChannelEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"
    SNA = "sna"


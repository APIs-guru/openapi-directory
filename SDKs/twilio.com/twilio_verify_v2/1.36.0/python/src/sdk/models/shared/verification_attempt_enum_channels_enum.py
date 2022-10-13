from dataclasses import dataclass, field
from typing import Enum

class VerificationAttemptEnumChannelsEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"


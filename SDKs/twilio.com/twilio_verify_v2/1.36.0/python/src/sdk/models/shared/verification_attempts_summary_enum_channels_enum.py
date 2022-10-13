from dataclasses import dataclass, field
from typing import Enum

class VerificationAttemptsSummaryEnumChannelsEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"


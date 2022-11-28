from dataclasses import dataclass, field
from enum import Enum

class VerificationAttemptsSummaryEnumChannelsEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"


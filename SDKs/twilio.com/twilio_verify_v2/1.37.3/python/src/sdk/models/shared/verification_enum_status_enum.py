from dataclasses import dataclass, field
from enum import Enum

class VerificationEnumStatusEnum(str, Enum):
    CANCELED = "canceled"
    APPROVED = "approved"


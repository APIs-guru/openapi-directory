from dataclasses import dataclass, field
from typing import Enum

class VerificationEnumStatusEnum(str, Enum):
    CANCELED = "canceled"
    APPROVED = "approved"


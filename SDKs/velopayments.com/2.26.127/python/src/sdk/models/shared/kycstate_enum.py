from dataclasses import dataclass, field
from typing import Enum

class KycStateEnum(str, Enum):
    FAILED_KYC = "FAILED_KYC"
    PASSED_KYC = "PASSED_KYC"
    REQUIRES_KYC = "REQUIRES_KYC"


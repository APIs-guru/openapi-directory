from dataclasses import dataclass, field
from typing import Enum

class VerificationAttemptEnumConversionStatusEnum(str, Enum):
    CONVERTED = "converted"
    UNCONVERTED = "unconverted"


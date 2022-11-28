from dataclasses import dataclass, field
from enum import Enum

class VerificationAttemptEnumConversionStatusEnum(str, Enum):
    CONVERTED = "converted"
    UNCONVERTED = "unconverted"


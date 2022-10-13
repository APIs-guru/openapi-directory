from dataclasses import dataclass, field
from typing import Enum

class PhoneNumberEnumValidationErrorEnum(str, Enum):
    TOO_SHORT = "TOO_SHORT"
    TOO_LONG = "TOO_LONG"
    INVALID_BUT_POSSIBLE = "INVALID_BUT_POSSIBLE"
    INVALID_COUNTRY_CODE = "INVALID_COUNTRY_CODE"
    INVALID_LENGTH = "INVALID_LENGTH"
    NOT_A_NUMBER = "NOT_A_NUMBER"


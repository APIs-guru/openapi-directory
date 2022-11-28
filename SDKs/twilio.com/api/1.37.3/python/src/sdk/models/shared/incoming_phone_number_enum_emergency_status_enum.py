from dataclasses import dataclass, field
from enum import Enum

class IncomingPhoneNumberEnumEmergencyStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"


from dataclasses import dataclass, field
from typing import Enum

class IncomingPhoneNumberEnumEmergencyStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"


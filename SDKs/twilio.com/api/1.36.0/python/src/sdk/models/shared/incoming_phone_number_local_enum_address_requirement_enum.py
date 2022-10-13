from dataclasses import dataclass, field
from typing import Enum

class IncomingPhoneNumberLocalEnumAddressRequirementEnum(str, Enum):
    NONE = "none"
    ANY = "any"
    LOCAL = "local"
    FOREIGN = "foreign"


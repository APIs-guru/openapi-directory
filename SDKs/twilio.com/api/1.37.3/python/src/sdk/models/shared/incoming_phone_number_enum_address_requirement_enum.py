from dataclasses import dataclass, field
from enum import Enum

class IncomingPhoneNumberEnumAddressRequirementEnum(str, Enum):
    NONE = "none"
    ANY = "any"
    LOCAL = "local"
    FOREIGN = "foreign"


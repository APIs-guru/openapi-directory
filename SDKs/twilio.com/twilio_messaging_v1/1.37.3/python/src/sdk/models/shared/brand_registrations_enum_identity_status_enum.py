from dataclasses import dataclass, field
from enum import Enum

class BrandRegistrationsEnumIdentityStatusEnum(str, Enum):
    SELF_DECLARED = "SELF_DECLARED"
    UNVERIFIED = "UNVERIFIED"
    VERIFIED = "VERIFIED"
    VETTED_VERIFIED = "VETTED_VERIFIED"


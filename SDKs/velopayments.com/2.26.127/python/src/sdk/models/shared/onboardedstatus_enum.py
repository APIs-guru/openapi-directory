from dataclasses import dataclass, field
from typing import Enum

class OnboardedStatusEnum(str, Enum):
    CREATED = "CREATED"
    INVITED = "INVITED"
    REGISTERED = "REGISTERED"
    ONBOARDED = "ONBOARDED"


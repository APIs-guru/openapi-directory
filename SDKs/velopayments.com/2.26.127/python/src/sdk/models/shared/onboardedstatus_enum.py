from dataclasses import dataclass, field
from enum import Enum

class OnboardedStatusEnum(str, Enum):
    CREATED = "CREATED"
    INVITED = "INVITED"
    REGISTERED = "REGISTERED"
    ONBOARDED = "ONBOARDED"


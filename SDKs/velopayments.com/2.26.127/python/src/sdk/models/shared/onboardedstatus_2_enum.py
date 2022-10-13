from dataclasses import dataclass, field
from typing import Enum

class OnboardedStatus2Enum(str, Enum):
    CREATED = "CREATED"
    INVITED = "INVITED"
    REGISTERED = "REGISTERED"
    ONBOARDED = "ONBOARDED"


from dataclasses import dataclass, field
from typing import Enum

class DestinationTypeEnum(str, Enum):
    CITY = "CITY"
    COUNTRY = "COUNTRY"
    REGION = "REGION"


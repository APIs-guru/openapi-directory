from dataclasses import dataclass, field
from enum import Enum

class DestinationTypeEnum(str, Enum):
    CITY = "CITY"
    COUNTRY = "COUNTRY"
    REGION = "REGION"


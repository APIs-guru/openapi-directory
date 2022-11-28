from dataclasses import dataclass, field
from enum import Enum

class RouteTypeEnum(str, Enum):
    FASTEST = "fastest"
    SHORTEST = "shortest"
    ECO = "eco"
    THRILLING = "thrilling"


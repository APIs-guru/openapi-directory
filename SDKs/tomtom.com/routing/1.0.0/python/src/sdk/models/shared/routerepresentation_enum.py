from dataclasses import dataclass, field
from enum import Enum

class RouteRepresentationEnum(str, Enum):
    POLYLINE = "polyline"
    NONE = "none"


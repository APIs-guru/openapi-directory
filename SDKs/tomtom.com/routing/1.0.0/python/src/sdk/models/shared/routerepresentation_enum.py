from dataclasses import dataclass, field
from typing import Enum

class RouteRepresentationEnum(str, Enum):
    POLYLINE = "polyline"
    NONE = "none"


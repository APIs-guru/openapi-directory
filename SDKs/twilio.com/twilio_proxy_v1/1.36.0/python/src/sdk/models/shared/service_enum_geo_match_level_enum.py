from dataclasses import dataclass, field
from typing import Enum

class ServiceEnumGeoMatchLevelEnum(str, Enum):
    AREA_CODE = "area-code"
    OVERLAY = "overlay"
    RADIUS = "radius"
    COUNTRY = "country"


from dataclasses import dataclass, field
from enum import Enum

class ServiceEnumGeoMatchLevelEnum(str, Enum):
    AREA_CODE = "area-code"
    OVERLAY = "overlay"
    RADIUS = "radius"
    COUNTRY = "country"


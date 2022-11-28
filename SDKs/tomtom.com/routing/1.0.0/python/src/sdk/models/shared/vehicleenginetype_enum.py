from dataclasses import dataclass, field
from enum import Enum

class VehicleEngineTypeEnum(str, Enum):
    COMBUSTION = "combustion"
    ELECTRIC = "electric"


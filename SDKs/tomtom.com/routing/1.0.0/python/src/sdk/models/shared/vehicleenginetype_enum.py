from dataclasses import dataclass, field
from typing import Enum

class VehicleEngineTypeEnum(str, Enum):
    COMBUSTION = "combustion"
    ELECTRIC = "electric"


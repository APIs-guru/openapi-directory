from dataclasses import dataclass, field
from typing import Enum

class TravelModeEnum(str, Enum):
    CAR = "car"
    TRUCK = "truck"
    TAXI = "taxi"
    BUS = "bus"
    VAN = "van"
    MOTORCYCLE = "motorcycle"
    BICYCLE = "bicycle"
    PEDESTRIAN = "pedestrian"


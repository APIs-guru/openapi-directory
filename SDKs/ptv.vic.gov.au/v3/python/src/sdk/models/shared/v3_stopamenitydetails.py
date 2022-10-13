from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V3StopAmenityDetails:
    car_parking: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'car_parking' }})
    cctv: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cctv' }})
    taxi_rank: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxi_rank' }})
    toilet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toilet' }})
    

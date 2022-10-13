from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import geofacility

class GeoFacilitiesResponseTypeEnum(str, Enum):
    FEATURE_COLLECTION = "FeatureCollection"


@dataclass_json
@dataclass
class GeoFacilitiesResponse:
    features: Optional[List[geofacility.GeoFacility]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    type: GeoFacilitiesResponseTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

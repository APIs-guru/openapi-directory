from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GeoFacilitiesResponseTypeEnum(str, Enum):
    FEATURE_COLLECTION = "FeatureCollection"


@dataclass_json
@dataclass
class GeoFacilitiesResponse:
    type: GeoFacilitiesResponseTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    features: Optional[List[GeoFacility]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetPostLocations200ApplicationJSON:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class GetPostLocationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_post_locations_200_application_json_objects: Optional[List[GetPostLocations200ApplicationJSON]] = field(default=None)
    

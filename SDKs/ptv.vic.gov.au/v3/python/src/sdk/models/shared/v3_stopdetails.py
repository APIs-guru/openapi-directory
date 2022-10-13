from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import v3_stopaccessibility
from . import v3_stopamenitydetails
from . import v3_stoplocation
from . import v3_stopstaffing


@dataclass_json
@dataclass
class V3StopDetails:
    disruption_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption_ids' }})
    route_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_type' }})
    routes: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    station_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'station_description' }})
    station_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'station_type' }})
    stop_accessibility: Optional[v3_stopaccessibility.V3StopAccessibility] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_accessibility' }})
    stop_amenities: Optional[v3_stopamenitydetails.V3StopAmenityDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_amenities' }})
    stop_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_id' }})
    stop_landmark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_landmark' }})
    stop_location: Optional[v3_stoplocation.V3StopLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_location' }})
    stop_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_name' }})
    stop_staffing: Optional[v3_stopstaffing.V3StopStaffing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stop_staffing' }})
    

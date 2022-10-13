from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLineRouteSection:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    from_station: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromStation' }})
    route_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeId' }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    to_station: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toStation' }})
    vehicle_destination_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicleDestinationText' }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStopPointRouteSection:
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineId' }})
    line_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineString' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    naptan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naptanId' }})
    route_section_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeSectionName' }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    valid_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validFrom', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vehicle_destination_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicleDestinationText' }})
    

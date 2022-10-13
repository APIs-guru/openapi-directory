from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesMatchedRoute:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    origination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originationName' }})
    originator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originator' }})
    route_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeCode' }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    valid_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validFrom', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

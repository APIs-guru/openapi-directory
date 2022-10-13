from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerFareTapDetails:
    bus_route_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'busRouteId' }})
    host_device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostDeviceType' }})
    mode_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modeType' }})
    national_location_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nationalLocationCode' }})
    tap_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tapTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationType' }})
    

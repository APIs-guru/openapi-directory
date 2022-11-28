from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerFareTapDetails:
    bus_route_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('busRouteId') }})
    host_device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostDeviceType') }})
    mode_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modeType') }})
    national_location_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nationalLocationCode') }})
    tap_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tapTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationType') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStopPointRouteSection:
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineId') }})
    line_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineString') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    naptan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naptanId') }})
    route_section_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeSectionName') }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    valid_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validFrom'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validTo'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vehicle_destination_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicleDestinationText') }})
    

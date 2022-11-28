from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesDisruptedPoint:
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInformation') }})
    appearance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appearance') }})
    atco_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('atcoCode') }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    from_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    station_atco_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stationAtcoCode') }})
    to_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

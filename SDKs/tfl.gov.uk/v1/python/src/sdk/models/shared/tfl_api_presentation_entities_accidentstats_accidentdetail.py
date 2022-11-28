from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesAccidentStatsAccidentDetail:
    borough: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borough') }})
    casualties: Optional[List[TflAPIPresentationEntitiesAccidentStatsCasualty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('casualties') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    vehicles: Optional[List[TflAPIPresentationEntitiesAccidentStatsVehicle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicles') }})
    

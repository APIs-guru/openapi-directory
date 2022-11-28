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
class V3Disruption:
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colour') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_on_board: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_on_board') }})
    display_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_status') }})
    disruption_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_id') }})
    disruption_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_status') }})
    disruption_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_type') }})
    from_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    published_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    routes: Optional[List[V3DisruptionRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    stops: Optional[List[V3DisruptionStop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stops') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    to_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

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
class AlertHistoryInfoDetailed:
    acknowledged: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledged'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    acknowledgedgements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgedgements') }})
    closed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closedBy') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    history_entries: Optional[List[AlertHistoryInfoEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyEntries') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPredictionTiming:
    countdown_server_adjustment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countdownServerAdjustment') }})
    insert: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    read: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    received: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sent: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sent'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnnotationRestAPIPut:
    end_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_dttm'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    json_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json_metadata') }})
    long_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('long_descr') }})
    short_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_descr') }})
    start_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_dttm'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

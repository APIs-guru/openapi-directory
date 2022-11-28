from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnnotationRestAPIGetList:
    changed_by: Optional[Meta1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by') }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on_delta_humanized') }})
    created_by: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    end_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_dttm'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    long_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('long_descr') }})
    short_descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_descr') }})
    start_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_dttm'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

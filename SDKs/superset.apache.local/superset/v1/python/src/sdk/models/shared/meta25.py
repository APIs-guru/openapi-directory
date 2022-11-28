from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Meta25:
    expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric_name') }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    d3format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('d3format') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metric_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric_type') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    verbose_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verbose_name') }})
    warning_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning_text') }})
    

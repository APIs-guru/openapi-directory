from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Meta22:
    column_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    filterable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterable') }})
    groupby: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupby') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_active') }})
    is_dttm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_dttm') }})
    python_date_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('python_date_format') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    type_generic: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_generic') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    verbose_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verbose_name') }})
    

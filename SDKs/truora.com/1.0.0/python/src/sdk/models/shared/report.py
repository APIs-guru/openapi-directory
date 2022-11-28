from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Report:
    r"""Report
    Represents reports
    """
    
    creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creation_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    created_checks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_checks_count') }})
    has_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_data') }})
    invalid_checks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_checks_count') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

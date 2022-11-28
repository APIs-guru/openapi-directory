from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Statement:
    end_balance: Optional[EndBalance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endBalance') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    errors: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    feed_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedConnectionId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    start_balance: Optional[StartBalance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startBalance') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statement_line_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statementLineCount') }})
    statement_lines: Optional[List[StatementLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statementLines') }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

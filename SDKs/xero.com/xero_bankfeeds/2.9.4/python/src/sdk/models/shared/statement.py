from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import endbalance
from . import error
from . import startbalance
from . import statementline


@dataclass_json
@dataclass
class Statement:
    end_balance: Optional[endbalance.EndBalance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endBalance' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    feed_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedConnectionId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    start_balance: Optional[startbalance.StartBalance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startBalance' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statement_line_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statementLineCount' }})
    statement_lines: Optional[List[statementline.StatementLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statementLines' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

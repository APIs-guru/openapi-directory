from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportExecutionLogRestAPIGetList:
    end_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    scheduled_dttm: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_dttm: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_dttm', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_row_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value_row_json' }})
    

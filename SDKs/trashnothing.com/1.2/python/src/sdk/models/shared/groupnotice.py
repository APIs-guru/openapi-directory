from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupNotice:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    notice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notice_id' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupedQuestion:
    date_tabled: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTabled', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    question_uin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionUin' }})
    

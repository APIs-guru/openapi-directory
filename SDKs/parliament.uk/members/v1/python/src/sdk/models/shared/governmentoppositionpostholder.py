from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import memberitem


@dataclass_json
@dataclass
class GovernmentOppositionPostHolder:
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_paid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPaid' }})
    laying_minister_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layingMinisterName' }})
    member: Optional[memberitem.MemberItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

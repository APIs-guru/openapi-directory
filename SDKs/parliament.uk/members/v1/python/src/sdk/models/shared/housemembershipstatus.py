from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HouseMembershipStatus:
    status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusDescription' }})
    status_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusId' }})
    status_is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusIsActive' }})
    status_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusNotes' }})
    status_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

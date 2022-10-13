from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisteredInterest:
    created_when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdWhen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedWhen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    interest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interest' }})
    last_amended_when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAmendedWhen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import photo


@dataclass_json
@dataclass
class Message:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email_attachments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_attachments' }})
    from_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_user_id' }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_id' }})
    photos: Optional[List[photo.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    to_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_user_id' }})
    

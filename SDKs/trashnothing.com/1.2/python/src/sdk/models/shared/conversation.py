from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import message
from . import user


@dataclass_json
@dataclass
class Conversation:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    conversation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_id' }})
    last_message_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_message_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    messages: Optional[List[message.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    num_unread_messages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_unread_messages' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

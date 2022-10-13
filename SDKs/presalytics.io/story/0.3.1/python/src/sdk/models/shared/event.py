from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Event:
    attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    chat_prompt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chat_prompt' }})
    conversation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_id' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    dom_selectors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dom_selectors' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_chat_hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_chat_hidden' }})
    is_notify_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_notify_enabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    

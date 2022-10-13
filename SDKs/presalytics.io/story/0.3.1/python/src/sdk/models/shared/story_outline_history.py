from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StoryOutlineHistory:
    collaborator_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collaborator_user_id' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    outline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outline' }})
    revision_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision_number' }})
    story_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'story_id' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    

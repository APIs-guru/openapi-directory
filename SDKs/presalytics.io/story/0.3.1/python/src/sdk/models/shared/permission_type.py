from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PermissionType:
    can_add_collaborators: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_add_collaborators' }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_delete' }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_edit' }})
    can_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_view' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    

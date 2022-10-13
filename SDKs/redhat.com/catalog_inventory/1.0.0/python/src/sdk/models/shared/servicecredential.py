from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceCredential:
    archived_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_seen_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    refresh_state_part_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_state_part_id' }})
    service_credential_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_credential_type_id' }})
    source_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    source_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ref' }})
    source_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_name' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceOffering:
    archived_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    distributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributor' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    extra: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_seen_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_seen_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'long_description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    refresh_state_part_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_state_part_id' }})
    service_inventory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_inventory_id' }})
    source_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_deleted_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    source_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ref' }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support_url' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

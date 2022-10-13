from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceCode:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pair_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pair_by' }})
    paired_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paired_at' }})
    product_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_type' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_changed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_changed_at' }})
    

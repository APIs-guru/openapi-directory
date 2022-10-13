from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sku


@dataclass_json
@dataclass
class EnvironmentBillingInfo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sku: Optional[sku.Sku] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

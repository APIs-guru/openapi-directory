from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum


@dataclass_json
@dataclass
class BaseL2Network:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_id' }})
    entity_type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    gateways: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateways' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_addresses' }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AssetResponseAttributesStatusEnum(str, Enum):
    IMPORTING = "importing"
    READY = "ready"
    FAILED = "failed"
    DELETED = "deleted"


@dataclass_json
@dataclass
class AssetResponseAttributes:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    render_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderId' }})
    status: Optional[AssetResponseAttributesStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

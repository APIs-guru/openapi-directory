from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assetresponseattributes


@dataclass_json
@dataclass
class AssetResponseData:
    attributes: Optional[assetresponseattributes.AssetResponseAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

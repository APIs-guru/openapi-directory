from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assetresponsedata


@dataclass_json
@dataclass
class AssetResponse:
    data: Optional[assetresponsedata.AssetResponseData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetresponsedata


@dataclass_json
@dataclass
class AssetRenderResponse:
    data: Optional[List[assetresponsedata.AssetResponseData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

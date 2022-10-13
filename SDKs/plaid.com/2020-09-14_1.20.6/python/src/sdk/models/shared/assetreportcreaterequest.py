from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetreportcreaterequestoptions


@dataclass_json
@dataclass
class AssetReportCreateRequest:
    access_tokens: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_tokens' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    days_requested: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days_requested' }})
    options: Optional[assetreportcreaterequestoptions.AssetReportCreateRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

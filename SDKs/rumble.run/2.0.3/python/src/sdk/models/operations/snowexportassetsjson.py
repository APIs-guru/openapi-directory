from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SnowExportAssetsJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SnowExportAssetsJSONRequest:
    security: SnowExportAssetsJSONSecurity = field()
    

@dataclass
class SnowExportAssetsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    asset_service_nows: Optional[List[shared.AssetServiceNow]] = field(default=None)
    

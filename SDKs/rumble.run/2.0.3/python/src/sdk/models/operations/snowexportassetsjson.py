from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SnowExportAssetsJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SnowExportAssetsJSONRequest:
    security: SnowExportAssetsJSONSecurity = field(default=None)
    

@dataclass
class SnowExportAssetsJSONResponse:
    asset_service_nows: Optional[List[shared.AssetServiceNow]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

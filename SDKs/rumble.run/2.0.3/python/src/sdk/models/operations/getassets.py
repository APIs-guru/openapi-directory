from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAssetsQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssetsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAssetsRequest:
    query_params: GetAssetsQueryParams = field(default=None)
    security: GetAssetsSecurity = field(default=None)
    

@dataclass
class GetAssetsResponse:
    assets: Optional[List[shared.Asset]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAssetsQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssetsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAssetsRequest:
    query_params: GetAssetsQueryParams = field()
    security: GetAssetsSecurity = field()
    

@dataclass
class GetAssetsResponse:
    content_type: str = field()
    status_code: int = field()
    assets: Optional[List[shared.Asset]] = field(default=None)
    

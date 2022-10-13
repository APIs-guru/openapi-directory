from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SplunkAssetSyncCreatedJSONQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    since: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class SplunkAssetSyncCreatedJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SplunkAssetSyncCreatedJSONRequest:
    query_params: SplunkAssetSyncCreatedJSONQueryParams = field(default=None)
    security: SplunkAssetSyncCreatedJSONSecurity = field(default=None)
    

@dataclass
class SplunkAssetSyncCreatedJSONResponse:
    assets_with_checkpoint: Optional[shared.AssetsWithCheckpoint] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

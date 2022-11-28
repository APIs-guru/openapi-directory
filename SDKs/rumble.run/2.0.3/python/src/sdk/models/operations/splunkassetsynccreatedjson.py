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
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SplunkAssetSyncCreatedJSONRequest:
    query_params: SplunkAssetSyncCreatedJSONQueryParams = field()
    security: SplunkAssetSyncCreatedJSONSecurity = field()
    

@dataclass
class SplunkAssetSyncCreatedJSONResponse:
    content_type: str = field()
    status_code: int = field()
    assets_with_checkpoint: Optional[shared.AssetsWithCheckpoint] = field(default=None)
    

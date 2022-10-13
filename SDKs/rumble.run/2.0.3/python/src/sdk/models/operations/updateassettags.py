from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAssetTagsPathParams:
    asset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssetTagsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAssetTagsRequest:
    path_params: UpdateAssetTagsPathParams = field(default=None)
    request: shared.AssetTags = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAssetTagsSecurity = field(default=None)
    

@dataclass
class UpdateAssetTagsResponse:
    asset: Optional[shared.Asset] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

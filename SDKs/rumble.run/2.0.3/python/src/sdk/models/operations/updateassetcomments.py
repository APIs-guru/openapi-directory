from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAssetCommentsPathParams:
    asset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssetCommentsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAssetCommentsRequest:
    path_params: UpdateAssetCommentsPathParams = field(default=None)
    request: shared.AssetComments = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAssetCommentsSecurity = field(default=None)
    

@dataclass
class UpdateAssetCommentsResponse:
    asset: Optional[shared.Asset] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

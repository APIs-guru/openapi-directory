from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAssetCommentsPathParams:
    asset_id: str = field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssetCommentsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAssetCommentsRequest:
    path_params: UpdateAssetCommentsPathParams = field()
    request: shared.AssetComments = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAssetCommentsSecurity = field()
    

@dataclass
class UpdateAssetCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    asset: Optional[shared.Asset] = field(default=None)
    

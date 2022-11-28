from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAssetTagsPathParams:
    asset_id: str = field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssetTagsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAssetTagsRequest:
    path_params: UpdateAssetTagsPathParams = field()
    request: shared.AssetTags = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAssetTagsSecurity = field()
    

@dataclass
class UpdateAssetTagsResponse:
    content_type: str = field()
    status_code: int = field()
    asset: Optional[shared.Asset] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateNsxvControllerClusterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNsxvControllerClusterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateNsxvControllerClusterRequest:
    path_params: UpdateNsxvControllerClusterPathParams = field()
    security: UpdateNsxvControllerClusterSecurity = field()
    request: Optional[shared.NsxControllerDataCollection] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNsxvControllerClusterResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    nsx_controller_data_collection: Optional[shared.NsxControllerDataCollection] = field(default=None)
    

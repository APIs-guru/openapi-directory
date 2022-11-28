from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateNsxvManagerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateNsxvManagerRequest:
    path_params: UpdateNsxvManagerPathParams = field()
    security: UpdateNsxvManagerSecurity = field()
    request: Optional[shared.NsxvManagerDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNsxvManagerResponse:
    content_type: str = field()
    status_code: int = field()
    nsxv_manager_data_source: Optional[shared.NsxvManagerDataSource] = field(default=None)
    

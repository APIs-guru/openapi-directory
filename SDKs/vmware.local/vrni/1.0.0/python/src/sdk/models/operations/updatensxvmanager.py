from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateNsxvManagerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNsxvManagerSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateNsxvManagerRequest:
    path_params: UpdateNsxvManagerPathParams = field(default=None)
    request: Optional[shared.NsxvManagerDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateNsxvManagerSecurity = field(default=None)
    

@dataclass
class UpdateNsxvManagerResponse:
    content_type: str = field(default=None)
    nsxv_manager_data_source: Optional[shared.NsxvManagerDataSource] = field(default=None)
    status_code: int = field(default=None)
    

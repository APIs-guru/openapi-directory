from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DetailSystemPathParams:
    inventory_id: str = field(default=None, metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DetailSystemSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DetailSystemRequest:
    path_params: DetailSystemPathParams = field(default=None)
    security: DetailSystemSecurity = field(default=None)
    

@dataclass
class DetailSystemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_system_detail_response: Optional[shared.ControllersSystemDetailResponse] = field(default=None)
    

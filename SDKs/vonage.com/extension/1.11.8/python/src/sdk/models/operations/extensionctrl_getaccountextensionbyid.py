from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtensionCtrlGetAccountExtensionByIDPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    extension_number: float = field(metadata={'path_param': { 'field_name': 'extension_number', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtensionCtrlGetAccountExtensionByIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExtensionCtrlGetAccountExtensionByIDRequest:
    path_params: ExtensionCtrlGetAccountExtensionByIDPathParams = field()
    security: ExtensionCtrlGetAccountExtensionByIDSecurity = field()
    

@dataclass
class ExtensionCtrlGetAccountExtensionByIDResponse:
    content_type: str = field()
    status_code: int = field()
    end_user_route_hal_response: Optional[shared.EndUserRouteHalResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    

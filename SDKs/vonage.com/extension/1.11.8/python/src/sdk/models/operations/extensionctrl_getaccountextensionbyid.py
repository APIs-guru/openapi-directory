from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtensionCtrlGetAccountExtensionByIDPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    extension_number: float = field(default=None, metadata={'path_param': { 'field_name': 'extension_number', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtensionCtrlGetAccountExtensionByIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExtensionCtrlGetAccountExtensionByIDRequest:
    path_params: ExtensionCtrlGetAccountExtensionByIDPathParams = field(default=None)
    security: ExtensionCtrlGetAccountExtensionByIDSecurity = field(default=None)
    

@dataclass
class ExtensionCtrlGetAccountExtensionByIDResponse:
    content_type: str = field(default=None)
    end_user_route_hal_response: Optional[shared.EndUserRouteHalResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    

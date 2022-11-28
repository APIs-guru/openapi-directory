from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtensionCtrlGetAccountExtensionsPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtensionCtrlGetAccountExtensionsQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    location_id: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    login_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'login_name', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phone_number', 'style': 'form', 'explode': True }})
    

@dataclass
class ExtensionCtrlGetAccountExtensionsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExtensionCtrlGetAccountExtensionsRequest:
    path_params: ExtensionCtrlGetAccountExtensionsPathParams = field()
    query_params: ExtensionCtrlGetAccountExtensionsQueryParams = field()
    security: ExtensionCtrlGetAccountExtensionsSecurity = field()
    

@dataclass
class ExtensionCtrlGetAccountExtensionsResponse:
    content_type: str = field()
    status_code: int = field()
    end_user_route_hal_response: Optional[shared.EndUserRouteHalResponse] = field(default=None)
    validation_errors_response: Optional[shared.ValidationErrorsResponse] = field(default=None)
    

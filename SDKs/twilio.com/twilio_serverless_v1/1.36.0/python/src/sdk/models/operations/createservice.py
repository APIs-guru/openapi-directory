from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SERVICE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateServiceRequestBodyCreateServiceRequest:
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    include_credentials: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IncludeCredentials' }})
    ui_editable: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'UiEditable' }})
    unique_name: str = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateServiceRequestBodyCreateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceSecurity = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service: Optional[shared.ServerlessV1Service] = field(default=None)
    

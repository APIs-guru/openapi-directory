from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SERVICE_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateServiceCreateServiceRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    include_credentials: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'IncludeCredentials' }})
    ui_editable: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'UiEditable' }})
    

@dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = field()
    request: Optional[CreateServiceCreateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service: Optional[shared.ServerlessV1Service] = field(default=None)
    

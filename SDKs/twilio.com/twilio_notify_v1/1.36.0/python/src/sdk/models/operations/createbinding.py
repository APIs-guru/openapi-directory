from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_BINDING_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class CreateBindingPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBindingCreateBindingRequest:
    address: str = field(default=None, metadata={'form': { 'field_name': 'Address' }})
    binding_type: shared.BindingEnumBindingTypeEnum = field(default=None, metadata={'form': { 'field_name': 'BindingType' }})
    credential_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CredentialSid' }})
    endpoint: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Endpoint' }})
    identity: str = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    notification_protocol_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'NotificationProtocolVersion' }})
    tag: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Tag' }})
    

@dataclass
class CreateBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBindingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateBindingPathParams = field(default=None)
    request: Optional[CreateBindingCreateBindingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBindingSecurity = field(default=None)
    

@dataclass
class CreateBindingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    notify_v1_service_binding: Optional[shared.NotifyV1ServiceBinding] = field(default=None)
    

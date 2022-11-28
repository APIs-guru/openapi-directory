from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_BINDING_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class CreateBindingPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBindingCreateBindingRequest:
    address: str = field(metadata={'form': { 'field_name': 'Address' }})
    binding_type: shared.BindingEnumBindingTypeEnum = field(metadata={'form': { 'field_name': 'BindingType' }})
    identity: str = field(metadata={'form': { 'field_name': 'Identity' }})
    credential_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CredentialSid' }})
    endpoint: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Endpoint' }})
    notification_protocol_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'NotificationProtocolVersion' }})
    tag: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Tag' }})
    

@dataclass
class CreateBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBindingRequest:
    path_params: CreateBindingPathParams = field()
    security: CreateBindingSecurity = field()
    request: Optional[CreateBindingCreateBindingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateBindingResponse:
    content_type: str = field()
    status_code: int = field()
    notify_v1_service_binding: Optional[shared.NotifyV1ServiceBinding] = field(default=None)
    

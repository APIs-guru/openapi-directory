from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateUsageTriggerPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateUsageTriggerRequestBodyCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateUsageTriggerRequestBodyUpdateUsageTriggerRequest:
    callback_method: Optional[UpdateUsageTriggerRequestBodyCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUsageTriggerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUsageTriggerPathParams = field(default=None)
    request: Optional[UpdateUsageTriggerRequestBodyUpdateUsageTriggerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUsageTriggerSecurity = field(default=None)
    

@dataclass
class UpdateUsageTriggerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_usage_usage_trigger: Optional[shared.APIV2010AccountUsageUsageTrigger] = field(default=None)
    

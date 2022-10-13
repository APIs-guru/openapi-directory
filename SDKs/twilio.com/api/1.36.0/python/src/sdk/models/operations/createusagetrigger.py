from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateUsageTriggerPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateUsageTriggerRequestBodyCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateUsageTriggerRequestBodyCreateUsageTriggerRequest:
    callback_method: Optional[CreateUsageTriggerRequestBodyCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: str = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    recurring: Optional[shared.UsageTriggerEnumRecurringEnum] = field(default=None, metadata={'form': { 'field_name': 'Recurring' }})
    trigger_by: Optional[shared.UsageTriggerEnumTriggerFieldEnum] = field(default=None, metadata={'form': { 'field_name': 'TriggerBy' }})
    trigger_value: str = field(default=None, metadata={'form': { 'field_name': 'TriggerValue' }})
    usage_category: shared.UsageTriggerEnumUsageCategoryEnum = field(default=None, metadata={'form': { 'field_name': 'UsageCategory' }})
    

@dataclass
class CreateUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUsageTriggerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateUsageTriggerPathParams = field(default=None)
    request: Optional[CreateUsageTriggerRequestBodyCreateUsageTriggerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateUsageTriggerSecurity = field(default=None)
    

@dataclass
class CreateUsageTriggerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_usage_usage_trigger: Optional[shared.APIV2010AccountUsageUsageTrigger] = field(default=None)
    

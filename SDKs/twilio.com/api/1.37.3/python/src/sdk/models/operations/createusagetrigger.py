from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateUsageTriggerPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateUsageTriggerCreateUsageTriggerRequest:
    callback_url: str = field(metadata={'form': { 'field_name': 'CallbackUrl' }})
    trigger_value: str = field(metadata={'form': { 'field_name': 'TriggerValue' }})
    usage_category: shared.UsageTriggerEnumUsageCategoryEnum = field(metadata={'form': { 'field_name': 'UsageCategory' }})
    callback_method: Optional[CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    recurring: Optional[shared.UsageTriggerEnumRecurringEnum] = field(default=None, metadata={'form': { 'field_name': 'Recurring' }})
    trigger_by: Optional[shared.UsageTriggerEnumTriggerFieldEnum] = field(default=None, metadata={'form': { 'field_name': 'TriggerBy' }})
    

@dataclass
class CreateUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUsageTriggerRequest:
    path_params: CreateUsageTriggerPathParams = field()
    security: CreateUsageTriggerSecurity = field()
    request: Optional[CreateUsageTriggerCreateUsageTriggerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUsageTriggerResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_usage_usage_trigger: Optional[shared.APIV2010AccountUsageUsageTrigger] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateUsageTriggerPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateUsageTriggerUpdateUsageTriggerRequest:
    callback_method: Optional[UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUsageTriggerRequest:
    path_params: UpdateUsageTriggerPathParams = field()
    security: UpdateUsageTriggerSecurity = field()
    request: Optional[UpdateUsageTriggerUpdateUsageTriggerRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUsageTriggerResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_usage_usage_trigger: Optional[shared.APIV2010AccountUsageUsageTrigger] = field(default=None)
    

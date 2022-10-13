from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateMessagePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessageRequestBodyCreateMessageRequest:
    address_retention: Optional[shared.MessageEnumAddressRetentionEnum] = field(default=None, metadata={'form': { 'field_name': 'AddressRetention' }})
    application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApplicationSid' }})
    attempt: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Attempt' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    content_retention: Optional[shared.MessageEnumContentRetentionEnum] = field(default=None, metadata={'form': { 'field_name': 'ContentRetention' }})
    force_delivery: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ForceDelivery' }})
    from_: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'From' }})
    max_price: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'MaxPrice' }})
    media_url: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'MediaUrl' }})
    messaging_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    persistent_action: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'PersistentAction' }})
    provide_feedback: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ProvideFeedback' }})
    schedule_type: Optional[shared.MessageEnumScheduleTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'ScheduleType' }})
    send_as_mms: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SendAsMms' }})
    send_at: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'SendAt' }})
    smart_encoded: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SmartEncoded' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    to: str = field(default=None, metadata={'form': { 'field_name': 'To' }})
    validity_period: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ValidityPeriod' }})
    

@dataclass
class CreateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateMessagePathParams = field(default=None)
    request: Optional[CreateMessageRequestBodyCreateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMessageSecurity = field(default=None)
    

@dataclass
class CreateMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_message: Optional[shared.APIV2010AccountMessage] = field(default=None)
    

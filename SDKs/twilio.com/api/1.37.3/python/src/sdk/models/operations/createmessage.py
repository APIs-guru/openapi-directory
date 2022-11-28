from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateMessagePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessageCreateMessageRequest:
    to: str = field(metadata={'form': { 'field_name': 'To' }})
    address_retention: Optional[shared.MessageEnumAddressRetentionEnum] = field(default=None, metadata={'form': { 'field_name': 'AddressRetention' }})
    application_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApplicationSid' }})
    attempt: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Attempt' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    content_retention: Optional[shared.MessageEnumContentRetentionEnum] = field(default=None, metadata={'form': { 'field_name': 'ContentRetention' }})
    content_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ContentSid' }})
    content_variables: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ContentVariables' }})
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
    shorten_urls: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ShortenUrls' }})
    smart_encoded: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SmartEncoded' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    validity_period: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'ValidityPeriod' }})
    

@dataclass
class CreateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessageRequest:
    path_params: CreateMessagePathParams = field()
    security: CreateMessageSecurity = field()
    request: Optional[CreateMessageCreateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateMessageResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_message: Optional[shared.APIV2010AccountMessage] = field(default=None)
    

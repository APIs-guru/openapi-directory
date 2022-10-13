from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class CreateRatePlanRequestBodyCreateRatePlanRequest:
    data_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DataEnabled' }})
    data_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'DataLimit' }})
    data_metering: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DataMetering' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    international_roaming: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'InternationalRoaming' }})
    international_roaming_data_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'InternationalRoamingDataLimit' }})
    messaging_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'MessagingEnabled' }})
    national_roaming_data_limit: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'NationalRoamingDataLimit' }})
    national_roaming_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'NationalRoamingEnabled' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    voice_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'VoiceEnabled' }})
    

@dataclass
class CreateRatePlanSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRatePlanRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateRatePlanRequestBodyCreateRatePlanRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRatePlanSecurity = field(default=None)
    

@dataclass
class CreateRatePlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wireless_v1_rate_plan: Optional[shared.WirelessV1RatePlan] = field(default=None)
    

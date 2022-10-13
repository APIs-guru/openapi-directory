from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_WIRELESS_USAGE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchWirelessUsagePathParams:
    sim_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchWirelessUsageQueryParams:
    end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'End', 'style': 'form', 'explode': True }})
    start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Start', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchWirelessUsageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchWirelessUsageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchWirelessUsagePathParams = field(default=None)
    query_params: FetchWirelessUsageQueryParams = field(default=None)
    security: FetchWirelessUsageSecurity = field(default=None)
    

@dataclass
class FetchWirelessUsageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_wireless_sim_usage: Optional[shared.PreviewWirelessSimUsage] = field(default=None)
    

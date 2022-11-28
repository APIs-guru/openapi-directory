from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ALERT_SERVERS = [
	"https://monitor.twilio.com",
]


@dataclass
class FetchAlertPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAlertSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAlertRequest:
    path_params: FetchAlertPathParams = field()
    security: FetchAlertSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAlertResponse:
    content_type: str = field()
    status_code: int = field()
    monitor_v1_alert_instance: Optional[shared.MonitorV1AlertInstance] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_DAY_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class FetchDayPathParams:
    day: str = field(metadata={'path_param': { 'field_name': 'Day', 'style': 'simple', 'explode': False }})
    resource_type: str = field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDaySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDayRequest:
    path_params: FetchDayPathParams = field()
    security: FetchDaySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDayResponse:
    content_type: str = field()
    status_code: int = field()
    bulkexports_v1_export_day_instance: Optional[shared.BulkexportsV1ExportDayInstance] = field(default=None)
    

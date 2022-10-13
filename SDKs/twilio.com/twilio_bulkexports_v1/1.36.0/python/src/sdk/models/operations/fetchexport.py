from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_EXPORT_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class FetchExportPathParams:
    resource_type: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchExportSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchExportRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchExportPathParams = field(default=None)
    security: FetchExportSecurity = field(default=None)
    

@dataclass
class FetchExportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bulkexports_v1_export: Optional[shared.BulkexportsV1Export] = field(default=None)
    

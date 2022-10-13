from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class FetchJobPathParams:
    job_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'JobSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchJobSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchJobRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchJobPathParams = field(default=None)
    security: FetchJobSecurity = field(default=None)
    

@dataclass
class FetchJobResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bulkexports_v1_export_job: Optional[shared.BulkexportsV1ExportJob] = field(default=None)
    

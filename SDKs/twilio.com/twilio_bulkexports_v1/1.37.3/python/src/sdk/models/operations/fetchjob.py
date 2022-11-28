from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class FetchJobPathParams:
    job_sid: str = field(metadata={'path_param': { 'field_name': 'JobSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchJobSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchJobRequest:
    path_params: FetchJobPathParams = field()
    security: FetchJobSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchJobResponse:
    content_type: str = field()
    status_code: int = field()
    bulkexports_v1_export_job: Optional[shared.BulkexportsV1ExportJob] = field(default=None)
    

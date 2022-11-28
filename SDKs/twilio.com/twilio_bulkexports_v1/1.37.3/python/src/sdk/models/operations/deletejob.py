from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class DeleteJobPathParams:
    job_sid: str = field(metadata={'path_param': { 'field_name': 'JobSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJobSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteJobRequest:
    path_params: DeleteJobPathParams = field()
    security: DeleteJobSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteJobResponse:
    content_type: str = field()
    status_code: int = field()
    

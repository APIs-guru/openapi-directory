from dataclasses import dataclass, field
from typing import Optional
DELETE_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class DeleteJobPathParams:
    job_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'JobSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJobSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteJobRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteJobPathParams = field(default=None)
    security: DeleteJobSecurity = field(default=None)
    

@dataclass
class DeleteJobResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

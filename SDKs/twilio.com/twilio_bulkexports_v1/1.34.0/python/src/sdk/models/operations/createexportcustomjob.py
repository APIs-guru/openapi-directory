from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_EXPORT_CUSTOM_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class CreateExportCustomJobPathParams:
    resource_type: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateExportCustomJobSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateExportCustomJobRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateExportCustomJobPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateExportCustomJobSecurity = field(default=None)
    

@dataclass
class CreateExportCustomJobResponses:
    bulkexports_v1_export_export_custom_job: Optional[shared.BulkexportsV1ExportExportCustomJob] = field(default=None)
    

@dataclass
class CreateExportCustomJobResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateExportCustomJobResponses]] = field(default=None)
    status_code: int = field(default=None)
    

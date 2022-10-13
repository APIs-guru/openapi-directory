from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployerJobsPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerJobsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetEmployerJobsRequest:
    path_params: GetEmployerJobsPathParams = field(default=None)
    headers: GetEmployerJobsHeaders = field(default=None)
    

@dataclass
class GetEmployerJobsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_employer_jobs_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    

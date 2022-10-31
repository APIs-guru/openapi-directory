from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayRunJobInfoPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunJobInfoHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunJobInfoRequest:
    path_params: GetPayRunJobInfoPathParams = field(default=None)
    headers: GetPayRunJobInfoHeaders = field(default=None)
    

@dataclass
class GetPayRunJobInfoResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    job_info: Optional[shared.JobInfo] = field(default=None)
    status_code: int = field(default=None)
    

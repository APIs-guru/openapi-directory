from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisJobStatusPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisJobStatusHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetCisJobStatusRequest:
    path_params: GetCisJobStatusPathParams = field(default=None)
    headers: GetCisJobStatusHeaders = field(default=None)
    

@dataclass
class GetCisJobStatusResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBatchJobStatusPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchJobStatusHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchJobStatusRequest:
    headers: GetBatchJobStatusHeaders = field()
    path_params: GetBatchJobStatusPathParams = field()
    

@dataclass
class GetBatchJobStatusResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    

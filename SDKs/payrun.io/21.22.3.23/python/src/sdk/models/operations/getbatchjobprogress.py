from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBatchJobProgressPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchJobProgressHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchJobProgressRequest:
    headers: GetBatchJobProgressHeaders = field()
    path_params: GetBatchJobProgressPathParams = field()
    

@dataclass
class GetBatchJobProgressResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    

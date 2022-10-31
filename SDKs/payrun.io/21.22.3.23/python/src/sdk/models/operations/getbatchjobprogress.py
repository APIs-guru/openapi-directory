from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBatchJobProgressPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchJobProgressHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchJobProgressRequest:
    path_params: GetBatchJobProgressPathParams = field(default=None)
    headers: GetBatchJobProgressHeaders = field(default=None)
    

@dataclass
class GetBatchJobProgressResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    

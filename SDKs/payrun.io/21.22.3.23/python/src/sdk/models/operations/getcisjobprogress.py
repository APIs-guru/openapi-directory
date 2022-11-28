from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisJobProgressPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisJobProgressHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisJobProgressRequest:
    headers: GetCisJobProgressHeaders = field()
    path_params: GetCisJobProgressPathParams = field()
    

@dataclass
class GetCisJobProgressResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    

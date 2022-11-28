from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDpsJobProgressPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDpsJobProgressHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDpsJobProgressRequest:
    headers: GetDpsJobProgressHeaders = field()
    path_params: GetDpsJobProgressPathParams = field()
    

@dataclass
class GetDpsJobProgressResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    

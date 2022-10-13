from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteRtiJobPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRtiJobHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class DeleteRtiJobRequest:
    path_params: DeleteRtiJobPathParams = field(default=None)
    headers: DeleteRtiJobHeaders = field(default=None)
    

@dataclass
class DeleteRtiJobResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    

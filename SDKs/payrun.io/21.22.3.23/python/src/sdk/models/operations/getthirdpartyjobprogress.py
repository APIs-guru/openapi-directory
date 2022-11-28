from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetThirdPartyJobProgressPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThirdPartyJobProgressHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThirdPartyJobProgressRequest:
    headers: GetThirdPartyJobProgressHeaders = field()
    path_params: GetThirdPartyJobProgressPathParams = field()
    

@dataclass
class GetThirdPartyJobProgressResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetThirdPartyJobProgressPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThirdPartyJobProgressHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThirdPartyJobProgressRequest:
    path_params: GetThirdPartyJobProgressPathParams = field(default=None)
    headers: GetThirdPartyJobProgressHeaders = field(default=None)
    

@dataclass
class GetThirdPartyJobProgressResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    

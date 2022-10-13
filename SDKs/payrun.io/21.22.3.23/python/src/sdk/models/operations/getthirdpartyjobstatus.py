from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetThirdPartyJobStatusPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThirdPartyJobStatusHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetThirdPartyJobStatusRequest:
    path_params: GetThirdPartyJobStatusPathParams = field(default=None)
    headers: GetThirdPartyJobStatusHeaders = field(default=None)
    

@dataclass
class GetThirdPartyJobStatusResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    

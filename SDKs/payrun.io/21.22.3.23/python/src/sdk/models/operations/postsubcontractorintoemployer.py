from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSubContractorIntoEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSubContractorIntoEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostSubContractorIntoEmployerRequest:
    path_params: PostSubContractorIntoEmployerPathParams = field(default=None)
    headers: PostSubContractorIntoEmployerHeaders = field(default=None)
    request: shared.SubContractor = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSubContractorIntoEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    

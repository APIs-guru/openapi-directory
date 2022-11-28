from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSubContractorIntoEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSubContractorIntoEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSubContractorIntoEmployerRequest:
    headers: PostSubContractorIntoEmployerHeaders = field()
    path_params: PostSubContractorIntoEmployerPathParams = field()
    request: shared.SubContractor = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSubContractorIntoEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    

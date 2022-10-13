from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCisLineTypeIntoEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCisLineTypeIntoEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostCisLineTypeIntoEmployerRequest:
    path_params: PostCisLineTypeIntoEmployerPathParams = field(default=None)
    headers: PostCisLineTypeIntoEmployerHeaders = field(default=None)
    request: shared.CisLineType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCisLineTypeIntoEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    

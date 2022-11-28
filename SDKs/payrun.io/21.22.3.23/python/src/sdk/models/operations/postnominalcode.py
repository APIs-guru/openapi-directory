from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostNominalCodePathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostNominalCodeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostNominalCodeRequest:
    headers: PostNominalCodeHeaders = field()
    path_params: PostNominalCodePathParams = field()
    request: shared.NominalCode = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNominalCodeResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    

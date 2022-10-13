from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllPayCodeTagsPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllPayCodeTagsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetAllPayCodeTagsRequest:
    path_params: GetAllPayCodeTagsPathParams = field(default=None)
    headers: GetAllPayCodeTagsHeaders = field(default=None)
    

@dataclass
class GetAllPayCodeTagsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    

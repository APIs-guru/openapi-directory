from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllRtiTransactionTagsPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllRtiTransactionTagsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetAllRtiTransactionTagsRequest:
    path_params: GetAllRtiTransactionTagsPathParams = field(default=None)
    headers: GetAllRtiTransactionTagsHeaders = field(default=None)
    

@dataclass
class GetAllRtiTransactionTagsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    

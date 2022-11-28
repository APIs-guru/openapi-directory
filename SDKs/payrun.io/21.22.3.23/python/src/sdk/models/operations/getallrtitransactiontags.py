from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllRtiTransactionTagsPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllRtiTransactionTagsHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllRtiTransactionTagsRequest:
    headers: GetAllRtiTransactionTagsHeaders = field()
    path_params: GetAllRtiTransactionTagsPathParams = field()
    

@dataclass
class GetAllRtiTransactionTagsResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    

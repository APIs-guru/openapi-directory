from dataclasses import dataclass, field
from typing import Enum,List,Optional


@dataclass
class GetWordListWordsPathParams:
    permalink: str = field(default=None, metadata={'path_param': { 'field_name': 'permalink', 'style': 'simple', 'explode': False }})
    
class GetWordListWordsSortByEnum(str, Enum):
    CREATE_DATE = "createDate"
    ALPHA = "alpha"


@dataclass
class GetWordListWordsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetWordListWordsSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWordListWordsHeaders:
    auth_token: str = field(default=None, metadata={'header': { 'field_name': 'auth_token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWordListWordsRequest:
    path_params: GetWordListWordsPathParams = field(default=None)
    query_params: GetWordListWordsQueryParams = field(default=None)
    headers: GetWordListWordsHeaders = field(default=None)
    

@dataclass
class GetWordListWordsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

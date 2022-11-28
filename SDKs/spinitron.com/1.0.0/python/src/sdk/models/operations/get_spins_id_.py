from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSpinsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpinsIDQueryParams:
    expand: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpinsIDRequest:
    path_params: GetSpinsIDPathParams = field()
    query_params: GetSpinsIDQueryParams = field()
    

@dataclass
class GetSpinsIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    spin: Optional[shared.Spin] = field(default=None)
    

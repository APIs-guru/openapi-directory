from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetShowsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShowsIDQueryParams:
    expand: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShowsIDRequest:
    path_params: GetShowsIDPathParams = field()
    query_params: GetShowsIDQueryParams = field()
    

@dataclass
class GetShowsIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    show: Optional[shared.Show] = field(default=None)
    

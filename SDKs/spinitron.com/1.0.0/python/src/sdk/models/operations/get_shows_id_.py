from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetShowsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShowsIDQueryParams:
    expand: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShowsIDRequest:
    path_params: GetShowsIDPathParams = field(default=None)
    query_params: GetShowsIDQueryParams = field(default=None)
    

@dataclass
class GetShowsIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    show: Optional[shared.Show] = field(default=None)
    status_code: int = field(default=None)
    

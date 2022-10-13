from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReleaseEventAPIDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReleaseEventAPIDeleteQueryParams:
    hard_delete: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hardDelete', 'style': 'form', 'explode': True }})
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventAPIDeleteRequest:
    path_params: ReleaseEventAPIDeletePathParams = field(default=None)
    query_params: ReleaseEventAPIDeleteQueryParams = field(default=None)
    

@dataclass
class ReleaseEventAPIDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

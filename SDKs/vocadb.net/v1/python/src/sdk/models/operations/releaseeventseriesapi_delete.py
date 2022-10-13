from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReleaseEventSeriesAPIDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReleaseEventSeriesAPIDeleteQueryParams:
    hard_delete: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hardDelete', 'style': 'form', 'explode': True }})
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventSeriesAPIDeleteRequest:
    path_params: ReleaseEventSeriesAPIDeletePathParams = field(default=None)
    query_params: ReleaseEventSeriesAPIDeleteQueryParams = field(default=None)
    

@dataclass
class ReleaseEventSeriesAPIDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class VenueAPIDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VenueAPIDeleteQueryParams:
    hard_delete: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hardDelete', 'style': 'form', 'explode': True }})
    notes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    

@dataclass
class VenueAPIDeleteRequest:
    path_params: VenueAPIDeletePathParams = field()
    query_params: VenueAPIDeleteQueryParams = field()
    

@dataclass
class VenueAPIDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    

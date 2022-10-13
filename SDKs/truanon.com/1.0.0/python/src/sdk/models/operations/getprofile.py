from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetProfileQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProfileRequest:
    query_params: GetProfileQueryParams = field(default=None)
    

@dataclass
class GetProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

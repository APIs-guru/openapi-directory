from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAdminRequestsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdminRequestsRequest:
    query_params: GetAdminRequestsQueryParams = field()
    

@dataclass
class GetAdminRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    

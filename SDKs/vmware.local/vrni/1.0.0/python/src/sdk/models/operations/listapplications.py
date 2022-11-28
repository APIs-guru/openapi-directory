from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListApplicationsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    start_time: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'start_time', 'style': 'form', 'explode': True }})
    

@dataclass
class ListApplicationsSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListApplicationsRequest:
    query_params: ListApplicationsQueryParams = field()
    security: ListApplicationsSecurity = field()
    

@dataclass
class ListApplicationsResponse:
    content_type: str = field()
    status_code: int = field()
    paged_list_response: Optional[shared.PagedListResponse] = field(default=None)
    

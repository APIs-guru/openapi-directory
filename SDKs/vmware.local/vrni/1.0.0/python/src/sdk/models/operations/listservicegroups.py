from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListServiceGroupsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    start_time: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'start_time', 'style': 'form', 'explode': True }})
    

@dataclass
class ListServiceGroupsSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListServiceGroupsRequest:
    query_params: ListServiceGroupsQueryParams = field()
    security: ListServiceGroupsSecurity = field()
    

@dataclass
class ListServiceGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    paged_list_response_with_time: Optional[shared.PagedListResponseWithTime] = field(default=None)
    

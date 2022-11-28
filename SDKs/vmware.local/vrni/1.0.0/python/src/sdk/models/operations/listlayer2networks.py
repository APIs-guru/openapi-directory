from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListLayer2NetworksQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    start_time: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'start_time', 'style': 'form', 'explode': True }})
    

@dataclass
class ListLayer2NetworksSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListLayer2NetworksRequest:
    query_params: ListLayer2NetworksQueryParams = field()
    security: ListLayer2NetworksSecurity = field()
    

@dataclass
class ListLayer2NetworksResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    paged_list_response_with_time: Optional[shared.PagedListResponseWithTime] = field(default=None)
    

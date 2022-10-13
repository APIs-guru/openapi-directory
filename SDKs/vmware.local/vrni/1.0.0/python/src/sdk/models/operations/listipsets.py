from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListIPSetsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    start_time: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'start_time', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIPSetsSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListIPSetsRequest:
    query_params: ListIPSetsQueryParams = field(default=None)
    security: ListIPSetsSecurity = field(default=None)
    

@dataclass
class ListIPSetsResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    paged_list_response_with_time: Optional[shared.PagedListResponseWithTime] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListWorkweekConfigsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkweekConfigsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListWorkweekConfigsRequest:
    query_params: ListWorkweekConfigsQueryParams = field(default=None)
    security: ListWorkweekConfigsSecurity = field(default=None)
    

@dataclass
class ListWorkweekConfigsResponse:
    content_type: str = field(default=None)
    list_workweek_configs_response: Optional[shared.ListWorkweekConfigsResponse] = field(default=None)
    status_code: int = field(default=None)
    

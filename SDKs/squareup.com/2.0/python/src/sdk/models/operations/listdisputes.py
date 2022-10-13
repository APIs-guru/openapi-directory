from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListDisputesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    states: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDisputesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListDisputesRequest:
    query_params: ListDisputesQueryParams = field(default=None)
    security: ListDisputesSecurity = field(default=None)
    

@dataclass
class ListDisputesResponse:
    content_type: str = field(default=None)
    list_disputes_response: Optional[shared.ListDisputesResponse] = field(default=None)
    status_code: int = field(default=None)
    

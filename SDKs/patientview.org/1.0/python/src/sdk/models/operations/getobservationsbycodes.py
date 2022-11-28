from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetObservationsByCodesPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObservationsByCodesQueryParams:
    code: List[str] = field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    limit: int = field(metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: int = field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_direction: str = field(metadata={'query_param': { 'field_name': 'orderDirection', 'style': 'form', 'explode': True }})
    

@dataclass
class GetObservationsByCodesRequest:
    path_params: GetObservationsByCodesPathParams = field()
    query_params: GetObservationsByCodesQueryParams = field()
    

@dataclass
class GetObservationsByCodesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

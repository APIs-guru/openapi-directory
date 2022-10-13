from dataclasses import dataclass, field
from typing import List


@dataclass
class GetObservationsByCodesPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObservationsByCodesQueryParams:
    code: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    limit: int = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: int = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_direction: str = field(default=None, metadata={'query_param': { 'field_name': 'orderDirection', 'style': 'form', 'explode': True }})
    

@dataclass
class GetObservationsByCodesRequest:
    path_params: GetObservationsByCodesPathParams = field(default=None)
    query_params: GetObservationsByCodesQueryParams = field(default=None)
    

@dataclass
class GetObservationsByCodesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

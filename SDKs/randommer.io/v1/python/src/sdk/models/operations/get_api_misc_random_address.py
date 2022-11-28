from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIMiscRandomAddressQueryParams:
    number: int = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    culture: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'culture', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMiscRandomAddressHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMiscRandomAddressRequest:
    headers: GetAPIMiscRandomAddressHeaders = field()
    query_params: GetAPIMiscRandomAddressQueryParams = field()
    

@dataclass
class GetAPIMiscRandomAddressResponse:
    content_type: str = field()
    status_code: int = field()
    

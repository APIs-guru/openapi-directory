from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIMiscRandomAddressQueryParams:
    culture: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'culture', 'style': 'form', 'explode': True }})
    number: int = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMiscRandomAddressHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class GetAPIMiscRandomAddressRequest:
    query_params: GetAPIMiscRandomAddressQueryParams = field(default=None)
    headers: GetAPIMiscRandomAddressHeaders = field(default=None)
    

@dataclass
class GetAPIMiscRandomAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

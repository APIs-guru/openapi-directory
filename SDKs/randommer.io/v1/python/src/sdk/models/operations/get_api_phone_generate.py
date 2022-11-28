from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIPhoneGenerateQueryParams:
    country_code: str = field(metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    quantity: int = field(metadata={'query_param': { 'field_name': 'Quantity', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIPhoneGenerateHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPhoneGenerateRequest:
    headers: GetAPIPhoneGenerateHeaders = field()
    query_params: GetAPIPhoneGenerateQueryParams = field()
    

@dataclass
class GetAPIPhoneGenerateResponse:
    content_type: str = field()
    status_code: int = field()
    

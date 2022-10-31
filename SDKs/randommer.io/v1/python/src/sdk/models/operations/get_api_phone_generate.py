from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIPhoneGenerateQueryParams:
    country_code: str = field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    quantity: int = field(default=None, metadata={'query_param': { 'field_name': 'Quantity', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIPhoneGenerateHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPhoneGenerateRequest:
    query_params: GetAPIPhoneGenerateQueryParams = field(default=None)
    headers: GetAPIPhoneGenerateHeaders = field(default=None)
    

@dataclass
class GetAPIPhoneGenerateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

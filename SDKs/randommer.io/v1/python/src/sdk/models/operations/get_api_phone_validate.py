from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIPhoneValidateQueryParams:
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    telephone: str = field(default=None, metadata={'query_param': { 'field_name': 'telephone', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIPhoneValidateHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPhoneValidateRequest:
    query_params: GetAPIPhoneValidateQueryParams = field(default=None)
    headers: GetAPIPhoneValidateHeaders = field(default=None)
    

@dataclass
class GetAPIPhoneValidateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

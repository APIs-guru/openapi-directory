from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPITextPasswordQueryParams:
    has_digits: bool = field(default=None, metadata={'query_param': { 'field_name': 'hasDigits', 'style': 'form', 'explode': True }})
    has_special: bool = field(default=None, metadata={'query_param': { 'field_name': 'hasSpecial', 'style': 'form', 'explode': True }})
    has_uppercase: bool = field(default=None, metadata={'query_param': { 'field_name': 'hasUppercase', 'style': 'form', 'explode': True }})
    length: int = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPITextPasswordHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class GetAPITextPasswordRequest:
    query_params: GetAPITextPasswordQueryParams = field(default=None)
    headers: GetAPITextPasswordHeaders = field(default=None)
    

@dataclass
class GetAPITextPasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

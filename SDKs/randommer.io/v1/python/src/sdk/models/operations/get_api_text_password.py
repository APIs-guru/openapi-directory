from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPITextPasswordQueryParams:
    has_digits: bool = field(metadata={'query_param': { 'field_name': 'hasDigits', 'style': 'form', 'explode': True }})
    has_special: bool = field(metadata={'query_param': { 'field_name': 'hasSpecial', 'style': 'form', 'explode': True }})
    has_uppercase: bool = field(metadata={'query_param': { 'field_name': 'hasUppercase', 'style': 'form', 'explode': True }})
    length: int = field(metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPITextPasswordHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPITextPasswordRequest:
    headers: GetAPITextPasswordHeaders = field()
    query_params: GetAPITextPasswordQueryParams = field()
    

@dataclass
class GetAPITextPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    

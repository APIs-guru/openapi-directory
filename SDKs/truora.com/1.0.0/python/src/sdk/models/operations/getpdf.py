from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPdfPathParams:
    check_id: str = field(default=None, metadata={'path_param': { 'field_name': 'check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPdfQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPdfRequest:
    path_params: GetPdfPathParams = field(default=None)
    query_params: GetPdfQueryParams = field(default=None)
    

@dataclass
class GetPdfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

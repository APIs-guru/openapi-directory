from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPdfPathParams:
    check_id: str = field(metadata={'path_param': { 'field_name': 'check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPdfQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPdfRequest:
    path_params: GetPdfPathParams = field()
    query_params: GetPdfQueryParams = field()
    

@dataclass
class GetPdfResponse:
    content_type: str = field()
    status_code: int = field()
    

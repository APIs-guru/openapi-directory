from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPISocialNumberHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPISocialNumberRequest:
    headers: GetAPISocialNumberHeaders = field()
    

@dataclass
class GetAPISocialNumberResponse:
    content_type: str = field()
    status_code: int = field()
    

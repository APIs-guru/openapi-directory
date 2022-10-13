from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPISocialNumberHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class GetAPISocialNumberRequest:
    headers: GetAPISocialNumberHeaders = field(default=None)
    

@dataclass
class GetAPISocialNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

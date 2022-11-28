from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPICardTypesHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPICardTypesRequest:
    headers: GetAPICardTypesHeaders = field()
    

@dataclass
class GetAPICardTypesResponse:
    content_type: str = field()
    status_code: int = field()
    

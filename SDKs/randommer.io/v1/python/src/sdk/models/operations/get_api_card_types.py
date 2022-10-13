from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPICardTypesHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class GetAPICardTypesRequest:
    headers: GetAPICardTypesHeaders = field(default=None)
    

@dataclass
class GetAPICardTypesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

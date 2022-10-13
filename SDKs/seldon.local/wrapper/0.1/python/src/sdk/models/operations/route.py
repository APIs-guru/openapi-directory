from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RouteRequestBody:
    json: Optional[shared.SeldonMessage] = field(default=None, metadata={'form': { 'field_name': 'json', 'json': True }})
    

@dataclass
class RouteRequest:
    request: RouteRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class RouteResponse:
    content_type: str = field(default=None)
    seldon_message: Optional[shared.SeldonMessage] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNamesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNamesRequest:
    request: shared.NamesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetNamesSecurity = field(default=None)
    

@dataclass
class GetNamesResponse:
    content_type: str = field(default=None)
    names_response: Optional[shared.NamesResponse] = field(default=None)
    status_code: int = field(default=None)
    

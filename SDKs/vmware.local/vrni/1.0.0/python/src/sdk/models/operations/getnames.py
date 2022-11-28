from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNamesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNamesRequest:
    request: shared.NamesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetNamesSecurity = field()
    

@dataclass
class GetNamesResponse:
    content_type: str = field()
    status_code: int = field()
    names_response: Optional[shared.NamesResponse] = field(default=None)
    

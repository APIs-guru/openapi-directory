from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreatePayorLinksSecurity:
    o_auth_velo_back_office: shared.SchemeOAuthVeloBackOffice = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePayorLinksRequest:
    request: shared.CreatePayorLinkRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayorLinksSecurity = field()
    

@dataclass
class CreatePayorLinksResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

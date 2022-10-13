from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCardRequest:
    request: shared.CreateCardRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCardSecurity = field(default=None)
    

@dataclass
class CreateCardResponse:
    content_type: str = field(default=None)
    create_card_response: Optional[shared.CreateCardResponse] = field(default=None)
    status_code: int = field(default=None)
    

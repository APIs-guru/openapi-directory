from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateGiftCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateGiftCardRequest:
    request: shared.CreateGiftCardRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateGiftCardSecurity = field(default=None)
    

@dataclass
class CreateGiftCardResponse:
    content_type: str = field(default=None)
    create_gift_card_response: Optional[shared.CreateGiftCardResponse] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveGiftCardFromGanSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveGiftCardFromGanRequest:
    request: shared.RetrieveGiftCardFromGanRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RetrieveGiftCardFromGanSecurity = field(default=None)
    

@dataclass
class RetrieveGiftCardFromGanResponse:
    content_type: str = field(default=None)
    retrieve_gift_card_from_gan_response: Optional[shared.RetrieveGiftCardFromGanResponse] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveGiftCardFromNonceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveGiftCardFromNonceRequest:
    request: shared.RetrieveGiftCardFromNonceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RetrieveGiftCardFromNonceSecurity = field(default=None)
    

@dataclass
class RetrieveGiftCardFromNonceResponse:
    content_type: str = field(default=None)
    retrieve_gift_card_from_nonce_response: Optional[shared.RetrieveGiftCardFromNonceResponse] = field(default=None)
    status_code: int = field(default=None)
    

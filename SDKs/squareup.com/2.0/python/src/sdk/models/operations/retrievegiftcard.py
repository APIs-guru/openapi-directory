from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveGiftCardPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveGiftCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveGiftCardRequest:
    path_params: RetrieveGiftCardPathParams = field(default=None)
    security: RetrieveGiftCardSecurity = field(default=None)
    

@dataclass
class RetrieveGiftCardResponse:
    content_type: str = field(default=None)
    retrieve_gift_card_response: Optional[shared.RetrieveGiftCardResponse] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateGiftCardActivitySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateGiftCardActivityRequest:
    request: shared.CreateGiftCardActivityRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateGiftCardActivitySecurity = field(default=None)
    

@dataclass
class CreateGiftCardActivityResponse:
    content_type: str = field(default=None)
    create_gift_card_activity_response: Optional[shared.CreateGiftCardActivityResponse] = field(default=None)
    status_code: int = field(default=None)
    

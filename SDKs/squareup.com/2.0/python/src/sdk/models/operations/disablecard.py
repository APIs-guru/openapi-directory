from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DisableCardPathParams:
    card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisableCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DisableCardRequest:
    path_params: DisableCardPathParams = field(default=None)
    security: DisableCardSecurity = field(default=None)
    

@dataclass
class DisableCardResponse:
    content_type: str = field(default=None)
    disable_card_response: Optional[shared.DisableCardResponse] = field(default=None)
    status_code: int = field(default=None)
    

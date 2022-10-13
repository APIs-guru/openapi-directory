from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveCardPathParams:
    card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveCardRequest:
    path_params: RetrieveCardPathParams = field(default=None)
    security: RetrieveCardSecurity = field(default=None)
    

@dataclass
class RetrieveCardResponse:
    content_type: str = field(default=None)
    retrieve_card_response: Optional[shared.RetrieveCardResponse] = field(default=None)
    status_code: int = field(default=None)
    

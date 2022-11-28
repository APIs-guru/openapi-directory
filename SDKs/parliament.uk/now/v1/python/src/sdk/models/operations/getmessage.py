from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetMessageAnnunciatorEnum(str, Enum):
    COMMONS_MAIN = "CommonsMain"
    LORDS_MAIN = "LordsMain"
    SECURITY = "Security"


@dataclass
class GetMessagePathParams:
    annunciator: GetMessageAnnunciatorEnum = field(metadata={'path_param': { 'field_name': 'annunciator', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessageRequest:
    path_params: GetMessagePathParams = field()
    

@dataclass
class GetMessageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    message_view_model: Optional[shared.MessageViewModel] = field(default=None)
    

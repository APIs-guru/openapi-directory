from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetMessageAnnunciatorEnum(str, Enum):
    COMMONS_MAIN = "CommonsMain"
    LORDS_MAIN = "LordsMain"
    SECURITY = "Security"


@dataclass
class GetMessagePathParams:
    annunciator: GetMessageAnnunciatorEnum = field(default=None, metadata={'path_param': { 'field_name': 'annunciator', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessageRequest:
    path_params: GetMessagePathParams = field(default=None)
    

@dataclass
class GetMessageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    message_view_model: Optional[shared.MessageViewModel] = field(default=None)
    status_code: int = field(default=None)
    

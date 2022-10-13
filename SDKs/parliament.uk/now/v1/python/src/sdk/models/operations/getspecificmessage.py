from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared

class GetSpecificMessageAnnunciatorEnum(str, Enum):
    COMMONS_MAIN = "CommonsMain"
    LORDS_MAIN = "LordsMain"
    SECURITY = "Security"


@dataclass
class GetSpecificMessagePathParams:
    annunciator: GetSpecificMessageAnnunciatorEnum = field(default=None, metadata={'path_param': { 'field_name': 'annunciator', 'style': 'simple', 'explode': False }})
    date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecificMessageRequest:
    path_params: GetSpecificMessagePathParams = field(default=None)
    

@dataclass
class GetSpecificMessageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    message_view_model: Optional[shared.MessageViewModel] = field(default=None)
    status_code: int = field(default=None)
    

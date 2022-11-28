from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetSpecificMessageAnnunciatorEnum(str, Enum):
    COMMONS_MAIN = "CommonsMain"
    LORDS_MAIN = "LordsMain"
    SECURITY = "Security"


@dataclass
class GetSpecificMessagePathParams:
    annunciator: GetSpecificMessageAnnunciatorEnum = field(metadata={'path_param': { 'field_name': 'annunciator', 'style': 'simple', 'explode': False }})
    date_: datetime = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecificMessageRequest:
    path_params: GetSpecificMessagePathParams = field()
    

@dataclass
class GetSpecificMessageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    message_view_model: Optional[shared.MessageViewModel] = field(default=None)
    

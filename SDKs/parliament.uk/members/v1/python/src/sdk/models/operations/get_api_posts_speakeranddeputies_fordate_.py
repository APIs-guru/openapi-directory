from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPostsSpeakerAndDeputiesForDatePathParams:
    for_date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'forDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPostsSpeakerAndDeputiesForDateRequest:
    path_params: GetAPIPostsSpeakerAndDeputiesForDatePathParams = field(default=None)
    

@dataclass
class GetAPIPostsSpeakerAndDeputiesForDateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    member_items: Optional[List[shared.MemberItem]] = field(default=None)
    status_code: int = field(default=None)
    

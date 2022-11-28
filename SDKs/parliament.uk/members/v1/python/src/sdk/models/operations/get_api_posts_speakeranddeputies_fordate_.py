from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPostsSpeakerAndDeputiesForDatePathParams:
    for_date: datetime = field(metadata={'path_param': { 'field_name': 'forDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPostsSpeakerAndDeputiesForDateRequest:
    path_params: GetAPIPostsSpeakerAndDeputiesForDatePathParams = field()
    

@dataclass
class GetAPIPostsSpeakerAndDeputiesForDateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    member_items: Optional[List[shared.MemberItem]] = field(default=None)
    

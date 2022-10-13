from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPartiesStateOfThePartiesHouseForDatePathParams:
    for_date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'forDate', 'style': 'simple', 'explode': False }})
    house: int = field(default=None, metadata={'path_param': { 'field_name': 'house', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPartiesStateOfThePartiesHouseForDateRequest:
    path_params: GetAPIPartiesStateOfThePartiesHouseForDatePathParams = field(default=None)
    

@dataclass
class GetAPIPartiesStateOfThePartiesHouseForDateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    party_seat_count_members_service_search_result: Optional[shared.PartySeatCountMembersServiceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    

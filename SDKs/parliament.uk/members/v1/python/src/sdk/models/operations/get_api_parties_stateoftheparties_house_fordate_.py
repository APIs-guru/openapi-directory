from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPartiesStateOfThePartiesHouseForDatePathParams:
    for_date: datetime = field(metadata={'path_param': { 'field_name': 'forDate', 'style': 'simple', 'explode': False }})
    house: int = field(metadata={'path_param': { 'field_name': 'house', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPartiesStateOfThePartiesHouseForDateRequest:
    path_params: GetAPIPartiesStateOfThePartiesHouseForDatePathParams = field()
    

@dataclass
class GetAPIPartiesStateOfThePartiesHouseForDateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    party_seat_count_members_service_search_result: Optional[shared.PartySeatCountMembersServiceSearchResult] = field(default=None)
    

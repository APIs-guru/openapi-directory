from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPartiesGetActiveHousePathParams:
    house: int = field(metadata={'path_param': { 'field_name': 'house', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPartiesGetActiveHouseRequest:
    path_params: GetAPIPartiesGetActiveHousePathParams = field()
    

@dataclass
class GetAPIPartiesGetActiveHouseResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    party_members_service_search_result: Optional[shared.PartyMembersServiceSearchResult] = field(default=None)
    

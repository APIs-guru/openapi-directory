from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPartiesGetActiveHousePathParams:
    house: int = field(default=None, metadata={'path_param': { 'field_name': 'house', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPartiesGetActiveHouseRequest:
    path_params: GetAPIPartiesGetActiveHousePathParams = field(default=None)
    

@dataclass
class GetAPIPartiesGetActiveHouseResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    party_members_service_search_result: Optional[shared.PartyMembersServiceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    

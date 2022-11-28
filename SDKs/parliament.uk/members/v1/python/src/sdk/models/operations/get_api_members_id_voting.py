from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDVotingPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDVotingQueryParams:
    house: int = field(metadata={'query_param': { 'field_name': 'house', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDVotingRequest:
    path_params: GetAPIMembersIDVotingPathParams = field()
    query_params: GetAPIMembersIDVotingQueryParams = field()
    

@dataclass
class GetAPIMembersIDVotingResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    vote_members_service_search_result: Optional[shared.VoteMembersServiceSearchResult] = field(default=None)
    

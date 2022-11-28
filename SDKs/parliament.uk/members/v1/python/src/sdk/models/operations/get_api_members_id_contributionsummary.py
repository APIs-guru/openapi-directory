from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDContributionSummaryPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDContributionSummaryQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDContributionSummaryRequest:
    path_params: GetAPIMembersIDContributionSummaryPathParams = field()
    query_params: GetAPIMembersIDContributionSummaryQueryParams = field()
    

@dataclass
class GetAPIMembersIDContributionSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    debate_contribution_members_service_search_result: Optional[shared.DebateContributionMembersServiceSearchResult] = field(default=None)
    

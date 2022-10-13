from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDContributionSummaryPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDContributionSummaryQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDContributionSummaryRequest:
    path_params: GetAPIMembersIDContributionSummaryPathParams = field(default=None)
    query_params: GetAPIMembersIDContributionSummaryQueryParams = field(default=None)
    

@dataclass
class GetAPIMembersIDContributionSummaryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    debate_contribution_members_service_search_result: Optional[shared.DebateContributionMembersServiceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    

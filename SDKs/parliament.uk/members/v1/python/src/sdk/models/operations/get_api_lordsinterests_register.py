from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILordsInterestsRegisterQueryParams:
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeleted', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPILordsInterestsRegisterRequest:
    query_params: GetAPILordsInterestsRegisterQueryParams = field(default=None)
    

@dataclass
class GetAPILordsInterestsRegisterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    members_interests_members_service_search_result: Optional[shared.MembersInterestsMembersServiceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    

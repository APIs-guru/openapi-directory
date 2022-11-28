from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILordsInterestsStaffQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPILordsInterestsStaffRequest:
    query_params: GetAPILordsInterestsStaffQueryParams = field()
    

@dataclass
class GetAPILordsInterestsStaffResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    members_staff_members_service_search_result: Optional[shared.MembersStaffMembersServiceSearchResult] = field(default=None)
    

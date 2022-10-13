from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILordsInterestsStaffQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPILordsInterestsStaffRequest:
    query_params: GetAPILordsInterestsStaffQueryParams = field(default=None)
    

@dataclass
class GetAPILordsInterestsStaffResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    members_staff_members_service_search_result: Optional[shared.MembersStaffMembersServiceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    

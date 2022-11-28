from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencySearchQueryParams:
    search_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchText', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPILocationConstituencySearchRequest:
    query_params: GetAPILocationConstituencySearchQueryParams = field()
    

@dataclass
class GetAPILocationConstituencySearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    constituency_members_service_search_result: Optional[shared.ConstituencyMembersServiceSearchResult] = field(default=None)
    

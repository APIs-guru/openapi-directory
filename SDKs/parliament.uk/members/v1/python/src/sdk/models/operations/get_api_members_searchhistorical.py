from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersSearchHistoricalQueryParams:
    date_to_search_for: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateToSearchFor', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersSearchHistoricalRequest:
    query_params: GetAPIMembersSearchHistoricalQueryParams = field(default=None)
    

@dataclass
class GetAPIMembersSearchHistoricalResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    member_members_service_search_result: Optional[shared.MemberMembersServiceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    

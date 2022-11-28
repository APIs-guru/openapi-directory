from dataclasses import dataclass, field
from datetime import date, datetime
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
    query_params: GetAPIMembersSearchHistoricalQueryParams = field()
    

@dataclass
class GetAPIMembersSearchHistoricalResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    member_members_service_search_result: Optional[shared.MemberMembersServiceSearchResult] = field(default=None)
    

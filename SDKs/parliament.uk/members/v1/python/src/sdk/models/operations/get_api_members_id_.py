from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDQueryParams:
    details_for_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'detailsForDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDRequest:
    path_params: GetAPIMembersIDPathParams = field()
    query_params: GetAPIMembersIDQueryParams = field()
    

@dataclass
class GetAPIMembersIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    member_item: Optional[shared.MemberItem] = field(default=None)
    

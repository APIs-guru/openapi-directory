from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDQueryParams:
    details_for_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'detailsForDate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDRequest:
    path_params: GetAPIMembersIDPathParams = field(default=None)
    query_params: GetAPIMembersIDQueryParams = field(default=None)
    

@dataclass
class GetAPIMembersIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    member_item: Optional[shared.MemberItem] = field(default=None)
    status_code: int = field(default=None)
    

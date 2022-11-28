from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPartiesLordsByTypeForDatePathParams:
    for_date: datetime = field(metadata={'path_param': { 'field_name': 'forDate', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPartiesLordsByTypeForDateRequest:
    path_params: GetAPIPartiesLordsByTypeForDatePathParams = field()
    

@dataclass
class GetAPIPartiesLordsByTypeForDateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    lords_by_type_members_service_search_result: Optional[shared.LordsByTypeMembersServiceSearchResult] = field(default=None)
    

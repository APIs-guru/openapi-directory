from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class GetEarlyDayMotionsListParametersOrderByEnum(str, Enum):
    DATE_TABLED_ASC = "DateTabledAsc"
    DATE_TABLED_DESC = "DateTabledDesc"
    TITLE_ASC = "TitleAsc"
    TITLE_DESC = "TitleDesc"
    SIGNATURE_COUNT_ASC = "SignatureCountAsc"
    SIGNATURE_COUNT_DESC = "SignatureCountDesc"

class GetEarlyDayMotionsListParametersStatusesEnum(str, Enum):
    PUBLISHED = "Published"
    WITHDRAWN = "Withdrawn"


@dataclass
class GetEarlyDayMotionsListQueryParams:
    parameters_current_status_date_end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.currentStatusDateEnd', 'style': 'form', 'explode': True }})
    parameters_current_status_date_start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.currentStatusDateStart', 'style': 'form', 'explode': True }})
    parameters_edm_ids: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.edmIds', 'style': 'form', 'explode': True }})
    parameters_include_sponsored_by_member: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.includeSponsoredByMember', 'style': 'form', 'explode': True }})
    parameters_is_prayer: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.isPrayer', 'style': 'form', 'explode': True }})
    parameters_member_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.memberId', 'style': 'form', 'explode': True }})
    parameters_order_by: Optional[GetEarlyDayMotionsListParametersOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.orderBy', 'style': 'form', 'explode': True }})
    parameters_search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.searchTerm', 'style': 'form', 'explode': True }})
    parameters_skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.skip', 'style': 'form', 'explode': True }})
    parameters_statuses: Optional[List[GetEarlyDayMotionsListParametersStatusesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.statuses', 'style': 'form', 'explode': True }})
    parameters_tabled_end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.tabledEndDate', 'style': 'form', 'explode': True }})
    parameters_tabled_start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.tabledStartDate', 'style': 'form', 'explode': True }})
    parameters_take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.take', 'style': 'form', 'explode': True }})
    parameters_u_in_with_amendment_suffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parameters.uINWithAmendmentSuffix', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEarlyDayMotionsListRequest:
    query_params: GetEarlyDayMotionsListQueryParams = field(default=None)
    

@dataclass
class GetEarlyDayMotionsListResponse:
    api_response_list_published_written_question_: Optional[shared.APIResponseListPublishedWrittenQuestion] = field(default=None)
    api_response_object_: Optional[shared.APIResponseObject] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

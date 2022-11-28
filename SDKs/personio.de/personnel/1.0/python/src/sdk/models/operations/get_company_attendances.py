from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCompanyAttendancesQueryParams:
    end_date: date = field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    start_date: date = field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    employees: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'employees', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    updated_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated_from', 'style': 'form', 'explode': True }})
    updated_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated_to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCompanyAttendancesRequest:
    query_params: GetCompanyAttendancesQueryParams = field()
    

@dataclass
class GetCompanyAttendancesResponse:
    content_type: str = field()
    status_code: int = field()
    attendance_periods_response: Optional[shared.AttendancePeriodsResponse] = field(default=None)
    

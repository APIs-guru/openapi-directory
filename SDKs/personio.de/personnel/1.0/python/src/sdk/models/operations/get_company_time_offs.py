from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCompanyTimeOffsQueryParams:
    employees: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'employees', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    updated_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated_from', 'style': 'form', 'explode': True }})
    updated_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updated_to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCompanyTimeOffsRequest:
    query_params: GetCompanyTimeOffsQueryParams = field(default=None)
    

@dataclass
class GetCompanyTimeOffsResponse:
    absence_periods_response: Optional[shared.AbsencePeriodsResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    year: str = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams:
    dettypes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dettypes', 'style': 'form', 'explode': True }})
    includetotalcount: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includetotalcount', 'style': 'form', 'explode': True }})
    pagenumber: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagenumber', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest:
    path_params: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams = field()
    query_params: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams = field()
    security: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity = field()
    

@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse:
    content_type: str = field()
    status_code: int = field()
    errors: Optional[List[shared.Error]] = field(default=None)
    pay_statement_details: Optional[List[shared.PayStatementDetails]] = field(default=None)
    

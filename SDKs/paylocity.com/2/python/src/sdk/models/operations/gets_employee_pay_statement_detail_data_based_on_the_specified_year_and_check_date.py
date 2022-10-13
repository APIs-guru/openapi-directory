from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams:
    check_date: str = field(default=None, metadata={'path_param': { 'field_name': 'checkDate', 'style': 'simple', 'explode': False }})
    company_id: str = field(default=None, metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    year: str = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams:
    dettypes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dettypes', 'style': 'form', 'explode': True }})
    includetotalcount: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includetotalcount', 'style': 'form', 'explode': True }})
    pagenumber: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagenumber', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest:
    path_params: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams = field(default=None)
    query_params: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams = field(default=None)
    security: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity = field(default=None)
    

@dataclass
class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    pay_statement_details: Optional[List[shared.PayStatementDetails]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayrollCalendarPathParams:
    payroll_calendar_id: str = field(metadata={'path_param': { 'field_name': 'PayrollCalendarID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayrollCalendarHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayrollCalendarSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayrollCalendarRequest:
    headers: GetPayrollCalendarHeaders = field()
    path_params: GetPayrollCalendarPathParams = field()
    security: GetPayrollCalendarSecurity = field()
    

@dataclass
class GetPayrollCalendarResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    payroll_calendars: Optional[shared.PayrollCalendars] = field(default=None)
    

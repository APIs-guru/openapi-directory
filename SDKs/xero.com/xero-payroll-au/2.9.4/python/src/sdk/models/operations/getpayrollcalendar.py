from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayrollCalendarPathParams:
    payroll_calendar_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayrollCalendarID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayrollCalendarHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayrollCalendarSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayrollCalendarRequest:
    path_params: GetPayrollCalendarPathParams = field(default=None)
    headers: GetPayrollCalendarHeaders = field(default=None)
    security: GetPayrollCalendarSecurity = field(default=None)
    

@dataclass
class GetPayrollCalendarResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    payroll_calendars: Optional[shared.PayrollCalendars] = field(default=None)
    status_code: int = field(default=None)
    

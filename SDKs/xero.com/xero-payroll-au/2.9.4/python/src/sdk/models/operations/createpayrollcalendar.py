from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreatePayrollCalendarHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class CreatePayrollCalendarSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePayrollCalendarRequest:
    headers: CreatePayrollCalendarHeaders = field(default=None)
    request: List[shared.PayrollCalendar] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayrollCalendarSecurity = field(default=None)
    

@dataclass
class CreatePayrollCalendarResponse:
    content_type: str = field(default=None)
    payroll_calendars: Optional[shared.PayrollCalendars] = field(default=None)
    status_code: int = field(default=None)
    

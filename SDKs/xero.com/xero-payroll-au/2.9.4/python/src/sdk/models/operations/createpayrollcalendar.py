from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreatePayrollCalendarHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePayrollCalendarSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePayrollCalendarRequest:
    headers: CreatePayrollCalendarHeaders = field()
    request: List[shared.PayrollCalendarInput] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayrollCalendarSecurity = field()
    

@dataclass
class CreatePayrollCalendarResponse:
    content_type: str = field()
    status_code: int = field()
    payroll_calendars: Optional[shared.PayrollCalendars] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayrollCalendarsQueryParams:
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    where: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayrollCalendarsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetPayrollCalendarsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayrollCalendarsRequest:
    query_params: GetPayrollCalendarsQueryParams = field(default=None)
    headers: GetPayrollCalendarsHeaders = field(default=None)
    security: GetPayrollCalendarsSecurity = field(default=None)
    

@dataclass
class GetPayrollCalendarsResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    payroll_calendars: Optional[shared.PayrollCalendars] = field(default=None)
    status_code: int = field(default=None)
    

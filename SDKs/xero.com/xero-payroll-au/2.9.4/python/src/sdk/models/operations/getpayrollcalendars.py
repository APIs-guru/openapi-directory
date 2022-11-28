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
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayrollCalendarsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayrollCalendarsRequest:
    headers: GetPayrollCalendarsHeaders = field()
    query_params: GetPayrollCalendarsQueryParams = field()
    security: GetPayrollCalendarsSecurity = field()
    

@dataclass
class GetPayrollCalendarsResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    payroll_calendars: Optional[shared.PayrollCalendars] = field(default=None)
    

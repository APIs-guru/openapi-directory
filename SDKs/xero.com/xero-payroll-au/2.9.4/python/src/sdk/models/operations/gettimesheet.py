from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTimesheetPathParams:
    timesheet_id: str = field(metadata={'path_param': { 'field_name': 'TimesheetID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimesheetHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimesheetSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTimesheetRequest:
    headers: GetTimesheetHeaders = field()
    path_params: GetTimesheetPathParams = field()
    security: GetTimesheetSecurity = field()
    

@dataclass
class GetTimesheetResponse:
    content_type: str = field()
    status_code: int = field()
    timesheet_object: Optional[shared.TimesheetObject] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTimesheetPathParams:
    timesheet_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TimesheetID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimesheetHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimesheetSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTimesheetRequest:
    path_params: GetTimesheetPathParams = field(default=None)
    headers: GetTimesheetHeaders = field(default=None)
    security: GetTimesheetSecurity = field(default=None)
    

@dataclass
class GetTimesheetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    timesheet_object: Optional[shared.TimesheetObject] = field(default=None)
    

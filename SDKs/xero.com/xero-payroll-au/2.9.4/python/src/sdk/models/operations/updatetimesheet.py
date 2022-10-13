from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateTimesheetPathParams:
    timesheet_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TimesheetID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTimesheetHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class UpdateTimesheetSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateTimesheetRequest:
    path_params: UpdateTimesheetPathParams = field(default=None)
    headers: UpdateTimesheetHeaders = field(default=None)
    request: Optional[List[shared.Timesheet]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTimesheetSecurity = field(default=None)
    

@dataclass
class UpdateTimesheetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    timesheets: Optional[shared.Timesheets] = field(default=None)
    

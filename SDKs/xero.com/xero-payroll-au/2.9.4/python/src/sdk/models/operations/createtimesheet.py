from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateTimesheetHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTimesheetSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTimesheetRequest:
    headers: CreateTimesheetHeaders = field(default=None)
    request: List[shared.Timesheet] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTimesheetSecurity = field(default=None)
    

@dataclass
class CreateTimesheetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    timesheets: Optional[shared.Timesheets] = field(default=None)
    

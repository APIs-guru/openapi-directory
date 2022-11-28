from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateTimesheetHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTimesheetSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTimesheetRequest:
    headers: CreateTimesheetHeaders = field()
    request: List[shared.TimesheetInput] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTimesheetSecurity = field()
    

@dataclass
class CreateTimesheetResponse:
    content_type: str = field()
    status_code: int = field()
    timesheets: Optional[shared.Timesheets] = field(default=None)
    

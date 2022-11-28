from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateTimesheetPathParams:
    timesheet_id: str = field(metadata={'path_param': { 'field_name': 'TimesheetID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTimesheetHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTimesheetSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateTimesheetRequest:
    headers: UpdateTimesheetHeaders = field()
    path_params: UpdateTimesheetPathParams = field()
    security: UpdateTimesheetSecurity = field()
    request: Optional[List[shared.TimesheetInput]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTimesheetResponse:
    content_type: str = field()
    status_code: int = field()
    timesheets: Optional[shared.Timesheets] = field(default=None)
    

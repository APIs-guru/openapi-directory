from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateLeaveApplicationPathParams:
    leave_application_id: str = field(metadata={'path_param': { 'field_name': 'LeaveApplicationID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLeaveApplicationHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLeaveApplicationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLeaveApplicationRequest:
    headers: UpdateLeaveApplicationHeaders = field()
    path_params: UpdateLeaveApplicationPathParams = field()
    request: List[shared.LeaveApplicationInput] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLeaveApplicationSecurity = field()
    

@dataclass
class UpdateLeaveApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    leave_applications: Optional[shared.LeaveApplications] = field(default=None)
    

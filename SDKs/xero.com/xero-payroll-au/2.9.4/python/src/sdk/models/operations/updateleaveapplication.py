from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateLeaveApplicationPathParams:
    leave_application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'LeaveApplicationID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLeaveApplicationHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class UpdateLeaveApplicationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLeaveApplicationRequest:
    path_params: UpdateLeaveApplicationPathParams = field(default=None)
    headers: UpdateLeaveApplicationHeaders = field(default=None)
    request: List[shared.LeaveApplication] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLeaveApplicationSecurity = field(default=None)
    

@dataclass
class UpdateLeaveApplicationResponse:
    content_type: str = field(default=None)
    leave_applications: Optional[shared.LeaveApplications] = field(default=None)
    status_code: int = field(default=None)
    

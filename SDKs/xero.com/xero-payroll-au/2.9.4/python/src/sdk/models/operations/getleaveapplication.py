from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLeaveApplicationPathParams:
    leave_application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'LeaveApplicationID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLeaveApplicationHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetLeaveApplicationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLeaveApplicationRequest:
    path_params: GetLeaveApplicationPathParams = field(default=None)
    headers: GetLeaveApplicationHeaders = field(default=None)
    security: GetLeaveApplicationSecurity = field(default=None)
    

@dataclass
class GetLeaveApplicationResponse:
    content_type: str = field(default=None)
    leave_applications: Optional[shared.LeaveApplications] = field(default=None)
    status_code: int = field(default=None)
    

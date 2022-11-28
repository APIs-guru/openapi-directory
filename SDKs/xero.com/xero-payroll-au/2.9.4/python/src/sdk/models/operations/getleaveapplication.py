from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLeaveApplicationPathParams:
    leave_application_id: str = field(metadata={'path_param': { 'field_name': 'LeaveApplicationID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLeaveApplicationHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLeaveApplicationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLeaveApplicationRequest:
    headers: GetLeaveApplicationHeaders = field()
    path_params: GetLeaveApplicationPathParams = field()
    security: GetLeaveApplicationSecurity = field()
    

@dataclass
class GetLeaveApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    leave_applications: Optional[shared.LeaveApplications] = field(default=None)
    

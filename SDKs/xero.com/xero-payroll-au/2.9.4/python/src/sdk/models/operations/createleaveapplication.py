from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateLeaveApplicationHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class CreateLeaveApplicationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateLeaveApplicationRequest:
    headers: CreateLeaveApplicationHeaders = field(default=None)
    request: List[shared.LeaveApplication] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLeaveApplicationSecurity = field(default=None)
    

@dataclass
class CreateLeaveApplicationResponse:
    content_type: str = field(default=None)
    leave_applications: Optional[shared.LeaveApplications] = field(default=None)
    status_code: int = field(default=None)
    

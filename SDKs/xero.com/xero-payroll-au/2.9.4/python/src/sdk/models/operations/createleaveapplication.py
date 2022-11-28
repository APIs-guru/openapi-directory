from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateLeaveApplicationHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateLeaveApplicationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateLeaveApplicationRequest:
    headers: CreateLeaveApplicationHeaders = field()
    request: List[shared.LeaveApplicationInput] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLeaveApplicationSecurity = field()
    

@dataclass
class CreateLeaveApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    leave_applications: Optional[shared.LeaveApplications] = field(default=None)
    

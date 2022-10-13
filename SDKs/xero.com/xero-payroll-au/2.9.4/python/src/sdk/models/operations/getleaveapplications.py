from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLeaveApplicationsQueryParams:
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    where: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLeaveApplicationsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetLeaveApplicationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLeaveApplicationsRequest:
    query_params: GetLeaveApplicationsQueryParams = field(default=None)
    headers: GetLeaveApplicationsHeaders = field(default=None)
    security: GetLeaveApplicationsSecurity = field(default=None)
    

@dataclass
class GetLeaveApplicationsResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    leave_applications: Optional[shared.LeaveApplications] = field(default=None)
    status_code: int = field(default=None)
    

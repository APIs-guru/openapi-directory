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
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLeaveApplicationsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLeaveApplicationsRequest:
    headers: GetLeaveApplicationsHeaders = field()
    query_params: GetLeaveApplicationsQueryParams = field()
    security: GetLeaveApplicationsSecurity = field()
    

@dataclass
class GetLeaveApplicationsResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    leave_applications: Optional[shared.LeaveApplications] = field(default=None)
    

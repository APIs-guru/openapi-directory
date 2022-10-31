from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFeedConnectionsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeedConnectionsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeedConnectionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFeedConnectionsRequest:
    query_params: GetFeedConnectionsQueryParams = field(default=None)
    headers: GetFeedConnectionsHeaders = field(default=None)
    security: GetFeedConnectionsSecurity = field(default=None)
    

@dataclass
class GetFeedConnectionsResponse:
    content_type: str = field(default=None)
    feed_connections: Optional[shared.FeedConnections] = field(default=None)
    status_code: int = field(default=None)
    

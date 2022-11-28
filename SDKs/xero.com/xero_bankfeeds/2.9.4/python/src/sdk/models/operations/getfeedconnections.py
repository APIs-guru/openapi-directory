from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFeedConnectionsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeedConnectionsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeedConnectionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFeedConnectionsRequest:
    headers: GetFeedConnectionsHeaders = field()
    query_params: GetFeedConnectionsQueryParams = field()
    security: GetFeedConnectionsSecurity = field()
    

@dataclass
class GetFeedConnectionsResponse:
    content_type: str = field()
    status_code: int = field()
    feed_connections: Optional[shared.FeedConnections] = field(default=None)
    

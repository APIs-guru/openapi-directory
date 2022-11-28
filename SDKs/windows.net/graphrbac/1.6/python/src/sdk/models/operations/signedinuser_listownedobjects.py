from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SignedInUserListOwnedObjectsPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignedInUserListOwnedObjectsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class SignedInUserListOwnedObjectsRequest:
    path_params: SignedInUserListOwnedObjectsPathParams = field()
    query_params: SignedInUserListOwnedObjectsQueryParams = field()
    

@dataclass
class SignedInUserListOwnedObjectsResponse:
    content_type: str = field()
    status_code: int = field()
    directory_object_list_result: Optional[shared.DirectoryObjectListResult] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    

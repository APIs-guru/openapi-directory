from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsListOwnersPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsListOwnersQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsListOwnersRequest:
    path_params: ServicePrincipalsListOwnersPathParams = field()
    query_params: ServicePrincipalsListOwnersQueryParams = field()
    

@dataclass
class ServicePrincipalsListOwnersResponse:
    content_type: str = field()
    status_code: int = field()
    directory_object_list_result: Optional[shared.DirectoryObjectListResult] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    

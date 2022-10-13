from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsListAppRoleAssignedToPathParams:
    object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsListAppRoleAssignedToQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsListAppRoleAssignedToRequest:
    path_params: ServicePrincipalsListAppRoleAssignedToPathParams = field(default=None)
    query_params: ServicePrincipalsListAppRoleAssignedToQueryParams = field(default=None)
    

@dataclass
class ServicePrincipalsListAppRoleAssignedToResponse:
    app_role_assignment_list_result: Optional[shared.AppRoleAssignmentListResult] = field(default=None)
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    

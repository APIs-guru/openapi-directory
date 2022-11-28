from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsListAppRoleAssignmentsPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsListAppRoleAssignmentsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsListAppRoleAssignmentsRequest:
    path_params: ServicePrincipalsListAppRoleAssignmentsPathParams = field()
    query_params: ServicePrincipalsListAppRoleAssignmentsQueryParams = field()
    

@dataclass
class ServicePrincipalsListAppRoleAssignmentsResponse:
    content_type: str = field()
    status_code: int = field()
    app_role_assignment_list_result: Optional[shared.AppRoleAssignmentListResult] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    

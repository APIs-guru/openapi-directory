from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletedApplicationsHardDeletePathParams:
    application_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletedApplicationsHardDeleteQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class DeletedApplicationsHardDeleteRequest:
    path_params: DeletedApplicationsHardDeletePathParams = field(default=None)
    query_params: DeletedApplicationsHardDeleteQueryParams = field(default=None)
    

@dataclass
class DeletedApplicationsHardDeleteResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    

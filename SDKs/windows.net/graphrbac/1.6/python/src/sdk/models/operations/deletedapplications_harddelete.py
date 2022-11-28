from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletedApplicationsHardDeletePathParams:
    application_object_id: str = field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletedApplicationsHardDeleteQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class DeletedApplicationsHardDeleteRequest:
    path_params: DeletedApplicationsHardDeletePathParams = field()
    query_params: DeletedApplicationsHardDeleteQueryParams = field()
    

@dataclass
class DeletedApplicationsHardDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeletedApplicationsRestorePathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletedApplicationsRestoreQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class DeletedApplicationsRestoreRequest:
    path_params: DeletedApplicationsRestorePathParams = field()
    query_params: DeletedApplicationsRestoreQueryParams = field()
    

@dataclass
class DeletedApplicationsRestoreResponse:
    content_type: str = field()
    status_code: int = field()
    application: Optional[dict[str, dict[str, Any]]] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    

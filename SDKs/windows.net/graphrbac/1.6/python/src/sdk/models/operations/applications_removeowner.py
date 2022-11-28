from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ApplicationsRemoveOwnerPathParams:
    application_object_id: str = field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    owner_object_id: str = field(metadata={'path_param': { 'field_name': 'ownerObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsRemoveOwnerQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsRemoveOwnerRequest:
    path_params: ApplicationsRemoveOwnerPathParams = field()
    query_params: ApplicationsRemoveOwnerQueryParams = field()
    

@dataclass
class ApplicationsRemoveOwnerResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    

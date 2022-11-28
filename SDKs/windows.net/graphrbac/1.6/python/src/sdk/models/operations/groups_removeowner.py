from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupsRemoveOwnerPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    owner_object_id: str = field(metadata={'path_param': { 'field_name': 'ownerObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsRemoveOwnerQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsRemoveOwnerRequest:
    path_params: GroupsRemoveOwnerPathParams = field()
    query_params: GroupsRemoveOwnerQueryParams = field()
    

@dataclass
class GroupsRemoveOwnerResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    

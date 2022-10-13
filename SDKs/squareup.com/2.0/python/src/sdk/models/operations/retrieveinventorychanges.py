from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveInventoryChangesPathParams:
    catalog_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'catalog_object_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveInventoryChangesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    location_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveInventoryChangesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveInventoryChangesRequest:
    path_params: RetrieveInventoryChangesPathParams = field(default=None)
    query_params: RetrieveInventoryChangesQueryParams = field(default=None)
    security: RetrieveInventoryChangesSecurity = field(default=None)
    

@dataclass
class RetrieveInventoryChangesResponse:
    content_type: str = field(default=None)
    retrieve_inventory_changes_response: Optional[shared.RetrieveInventoryChangesResponse] = field(default=None)
    status_code: int = field(default=None)
    

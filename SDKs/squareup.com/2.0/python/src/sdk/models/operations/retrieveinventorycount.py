from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveInventoryCountPathParams:
    catalog_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'catalog_object_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveInventoryCountQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    location_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveInventoryCountSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveInventoryCountRequest:
    path_params: RetrieveInventoryCountPathParams = field(default=None)
    query_params: RetrieveInventoryCountQueryParams = field(default=None)
    security: RetrieveInventoryCountSecurity = field(default=None)
    

@dataclass
class RetrieveInventoryCountResponse:
    content_type: str = field(default=None)
    retrieve_inventory_count_response: Optional[shared.RetrieveInventoryCountResponse] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeprecatedRetrieveInventoryPhysicalCountPathParams:
    physical_count_id: str = field(default=None, metadata={'path_param': { 'field_name': 'physical_count_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeprecatedRetrieveInventoryPhysicalCountSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeprecatedRetrieveInventoryPhysicalCountRequest:
    path_params: DeprecatedRetrieveInventoryPhysicalCountPathParams = field(default=None)
    security: DeprecatedRetrieveInventoryPhysicalCountSecurity = field(default=None)
    

@dataclass
class DeprecatedRetrieveInventoryPhysicalCountResponse:
    content_type: str = field(default=None)
    retrieve_inventory_physical_count_response: Optional[shared.RetrieveInventoryPhysicalCountResponse] = field(default=None)
    status_code: int = field(default=None)
    

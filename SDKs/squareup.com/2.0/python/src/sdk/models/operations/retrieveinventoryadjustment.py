from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveInventoryAdjustmentPathParams:
    adjustment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'adjustment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveInventoryAdjustmentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveInventoryAdjustmentRequest:
    path_params: RetrieveInventoryAdjustmentPathParams = field(default=None)
    security: RetrieveInventoryAdjustmentSecurity = field(default=None)
    

@dataclass
class RetrieveInventoryAdjustmentResponse:
    content_type: str = field(default=None)
    retrieve_inventory_adjustment_response: Optional[shared.RetrieveInventoryAdjustmentResponse] = field(default=None)
    status_code: int = field(default=None)
    

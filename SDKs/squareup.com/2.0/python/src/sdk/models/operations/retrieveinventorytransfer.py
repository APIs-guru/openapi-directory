from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveInventoryTransferPathParams:
    transfer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transfer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveInventoryTransferSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveInventoryTransferRequest:
    path_params: RetrieveInventoryTransferPathParams = field(default=None)
    security: RetrieveInventoryTransferSecurity = field(default=None)
    

@dataclass
class RetrieveInventoryTransferResponse:
    content_type: str = field(default=None)
    retrieve_inventory_transfer_response: Optional[shared.RetrieveInventoryTransferResponse] = field(default=None)
    status_code: int = field(default=None)
    

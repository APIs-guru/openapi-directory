from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeletesystemPathParams:
    inventory_id: str = field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletesystemSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeletesystemRequest:
    path_params: DeletesystemPathParams = field()
    security: DeletesystemSecurity = field()
    

@dataclass
class DeletesystemResponse:
    content_type: str = field()
    status_code: int = field()
    

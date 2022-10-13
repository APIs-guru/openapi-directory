from dataclasses import dataclass, field



@dataclass
class DeletesystemPathParams:
    inventory_id: str = field(default=None, metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletesystemSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeletesystemRequest:
    path_params: DeletesystemPathParams = field(default=None)
    security: DeletesystemSecurity = field(default=None)
    

@dataclass
class DeletesystemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

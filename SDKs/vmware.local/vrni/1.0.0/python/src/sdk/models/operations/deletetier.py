from dataclasses import dataclass, field



@dataclass
class DeleteTierPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    tier_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTierSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteTierRequest:
    path_params: DeleteTierPathParams = field(default=None)
    security: DeleteTierSecurity = field(default=None)
    

@dataclass
class DeleteTierResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

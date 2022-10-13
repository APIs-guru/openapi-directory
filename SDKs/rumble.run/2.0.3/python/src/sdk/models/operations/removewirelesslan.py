from dataclasses import dataclass, field



@dataclass
class RemoveWirelessLanPathParams:
    wireless_id: str = field(default=None, metadata={'path_param': { 'field_name': 'wireless_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveWirelessLanSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveWirelessLanRequest:
    path_params: RemoveWirelessLanPathParams = field(default=None)
    security: RemoveWirelessLanSecurity = field(default=None)
    

@dataclass
class RemoveWirelessLanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

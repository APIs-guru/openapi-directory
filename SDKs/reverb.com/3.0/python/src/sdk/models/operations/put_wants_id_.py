from dataclasses import dataclass, field



@dataclass
class PutWantsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWantsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutWantsIDRequest:
    path_params: PutWantsIDPathParams = field(default=None)
    security: PutWantsIDSecurity = field(default=None)
    

@dataclass
class PutWantsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

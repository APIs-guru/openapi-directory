from dataclasses import dataclass, field



@dataclass
class DeleteWantsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWantsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteWantsIDRequest:
    path_params: DeleteWantsIDPathParams = field(default=None)
    security: DeleteWantsIDSecurity = field(default=None)
    

@dataclass
class DeleteWantsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

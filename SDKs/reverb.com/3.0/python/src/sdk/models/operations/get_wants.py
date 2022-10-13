from dataclasses import dataclass, field



@dataclass
class GetWantsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWantsRequest:
    security: GetWantsSecurity = field(default=None)
    

@dataclass
class GetWantsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

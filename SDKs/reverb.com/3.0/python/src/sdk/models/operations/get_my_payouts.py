from dataclasses import dataclass, field



@dataclass
class GetMyPayoutsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyPayoutsRequest:
    security: GetMyPayoutsSecurity = field(default=None)
    

@dataclass
class GetMyPayoutsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

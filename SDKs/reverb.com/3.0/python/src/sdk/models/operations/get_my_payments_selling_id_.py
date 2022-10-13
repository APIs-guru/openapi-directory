from dataclasses import dataclass, field



@dataclass
class GetMyPaymentsSellingIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMyPaymentsSellingIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyPaymentsSellingIDRequest:
    path_params: GetMyPaymentsSellingIDPathParams = field(default=None)
    security: GetMyPaymentsSellingIDSecurity = field(default=None)
    

@dataclass
class GetMyPaymentsSellingIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

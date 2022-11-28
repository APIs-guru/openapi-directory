from dataclasses import dataclass, field



@dataclass
class GetWebhooksRegistrationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksRegistrationsIDRequest:
    path_params: GetWebhooksRegistrationsIDPathParams = field()
    

@dataclass
class GetWebhooksRegistrationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class GetWebhooksRegistrationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebhooksRegistrationsIDRequest:
    path_params: GetWebhooksRegistrationsIDPathParams = field(default=None)
    

@dataclass
class GetWebhooksRegistrationsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field



@dataclass
class DeleteWebhooksRegistrationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksRegistrationsIDRequest:
    path_params: DeleteWebhooksRegistrationsIDPathParams = field()
    

@dataclass
class DeleteWebhooksRegistrationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class DeleteWebhooksRegistrationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksRegistrationsIDRequest:
    path_params: DeleteWebhooksRegistrationsIDPathParams = field(default=None)
    

@dataclass
class DeleteWebhooksRegistrationsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

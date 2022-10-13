from dataclasses import dataclass, field



@dataclass
class DeleteWebhooksIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksIDRequest:
    path_params: DeleteWebhooksIDPathParams = field(default=None)
    

@dataclass
class DeleteWebhooksIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

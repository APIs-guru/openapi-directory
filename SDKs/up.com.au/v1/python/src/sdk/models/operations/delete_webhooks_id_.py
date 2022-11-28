from dataclasses import dataclass, field



@dataclass
class DeleteWebhooksIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksIDRequest:
    path_params: DeleteWebhooksIDPathParams = field()
    

@dataclass
class DeleteWebhooksIDResponse:
    content_type: str = field()
    status_code: int = field()
    

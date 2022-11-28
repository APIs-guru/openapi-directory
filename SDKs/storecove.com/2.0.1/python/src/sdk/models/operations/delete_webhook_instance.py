from dataclasses import dataclass, field



@dataclass
class DeleteWebhookInstancePathParams:
    guid: str = field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhookInstanceRequest:
    path_params: DeleteWebhookInstancePathParams = field()
    

@dataclass
class DeleteWebhookInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class DeleteWebhookInstancePathParams:
    guid: str = field(default=None, metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhookInstanceRequest:
    path_params: DeleteWebhookInstancePathParams = field(default=None)
    

@dataclass
class DeleteWebhookInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

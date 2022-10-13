from dataclasses import dataclass, field



@dataclass
class DeleteAlertPathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alert_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlertRequest:
    path_params: DeleteAlertPathParams = field(default=None)
    

@dataclass
class DeleteAlertResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

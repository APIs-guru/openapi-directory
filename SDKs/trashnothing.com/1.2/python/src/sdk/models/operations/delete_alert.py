from dataclasses import dataclass, field



@dataclass
class DeleteAlertPathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alert_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlertRequest:
    path_params: DeleteAlertPathParams = field()
    

@dataclass
class DeleteAlertResponse:
    content_type: str = field()
    status_code: int = field()
    

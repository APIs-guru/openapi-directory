from dataclasses import dataclass, field



@dataclass
class DeleteLegalEntityPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLegalEntityRequest:
    path_params: DeleteLegalEntityPathParams = field(default=None)
    

@dataclass
class DeleteLegalEntityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

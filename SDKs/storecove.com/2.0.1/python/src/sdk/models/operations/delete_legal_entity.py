from dataclasses import dataclass, field



@dataclass
class DeleteLegalEntityPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLegalEntityRequest:
    path_params: DeleteLegalEntityPathParams = field()
    

@dataclass
class DeleteLegalEntityResponse:
    content_type: str = field()
    status_code: int = field()
    

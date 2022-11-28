from dataclasses import dataclass, field



@dataclass
class DeleteAdministrationPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationRequest:
    path_params: DeleteAdministrationPathParams = field()
    

@dataclass
class DeleteAdministrationResponse:
    content_type: str = field()
    status_code: int = field()
    

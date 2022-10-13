from dataclasses import dataclass, field



@dataclass
class DeleteAdministrationPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationRequest:
    path_params: DeleteAdministrationPathParams = field(default=None)
    

@dataclass
class DeleteAdministrationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

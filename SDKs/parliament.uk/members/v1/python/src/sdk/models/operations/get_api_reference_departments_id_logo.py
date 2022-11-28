from dataclasses import dataclass, field



@dataclass
class GetAPIReferenceDepartmentsIDLogoPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIReferenceDepartmentsIDLogoRequest:
    path_params: GetAPIReferenceDepartmentsIDLogoPathParams = field()
    

@dataclass
class GetAPIReferenceDepartmentsIDLogoResponse:
    content_type: str = field()
    status_code: int = field()
    

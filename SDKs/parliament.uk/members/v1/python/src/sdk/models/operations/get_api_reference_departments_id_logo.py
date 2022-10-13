from dataclasses import dataclass, field



@dataclass
class GetAPIReferenceDepartmentsIDLogoPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIReferenceDepartmentsIDLogoRequest:
    path_params: GetAPIReferenceDepartmentsIDLogoPathParams = field(default=None)
    

@dataclass
class GetAPIReferenceDepartmentsIDLogoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

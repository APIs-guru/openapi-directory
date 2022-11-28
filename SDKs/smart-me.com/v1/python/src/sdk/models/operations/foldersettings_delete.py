from dataclasses import dataclass, field



@dataclass
class FolderSettingsDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderSettingsDeleteRequest:
    path_params: FolderSettingsDeletePathParams = field()
    

@dataclass
class FolderSettingsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    

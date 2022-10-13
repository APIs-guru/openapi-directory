from dataclasses import dataclass, field



@dataclass
class FolderSettingsDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderSettingsDeleteRequest:
    path_params: FolderSettingsDeletePathParams = field(default=None)
    

@dataclass
class FolderSettingsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

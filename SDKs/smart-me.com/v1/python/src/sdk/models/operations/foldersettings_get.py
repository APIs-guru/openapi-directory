from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FolderSettingsGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderSettingsGetRequest:
    path_params: FolderSettingsGetPathParams = field(default=None)
    

@dataclass
class FolderSettingsGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    folder_settings: Optional[shared.FolderSettings] = field(default=None)
    status_code: int = field(default=None)
    

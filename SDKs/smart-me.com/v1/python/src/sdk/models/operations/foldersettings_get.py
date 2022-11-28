from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FolderSettingsGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderSettingsGetRequest:
    path_params: FolderSettingsGetPathParams = field()
    

@dataclass
class FolderSettingsGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    folder_settings: Optional[shared.FolderSettings] = field(default=None)
    

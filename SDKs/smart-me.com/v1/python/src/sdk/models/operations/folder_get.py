from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FolderGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderGetRequest:
    path_params: FolderGetPathParams = field(default=None)
    

@dataclass
class FolderGetResponse:
    content_type: str = field(default=None)
    folder_data: Optional[shared.FolderData] = field(default=None)
    status_code: int = field(default=None)
    

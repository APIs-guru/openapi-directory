from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FolderGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FolderGetRequest:
    path_params: FolderGetPathParams = field()
    

@dataclass
class FolderGetResponse:
    content_type: str = field()
    status_code: int = field()
    folder_data: Optional[shared.FolderData] = field(default=None)
    

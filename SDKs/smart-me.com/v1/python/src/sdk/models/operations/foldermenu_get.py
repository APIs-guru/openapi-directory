from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FolderMenuGetQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class FolderMenuGetRequest:
    query_params: FolderMenuGetQueryParams = field()
    

@dataclass
class FolderMenuGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    folder_menu_configuration: Optional[shared.FolderMenuConfiguration] = field(default=None)
    

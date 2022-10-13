from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetLanguagesFilterEnum(str, Enum):
    TEXTTRACKS = "texttracks"


@dataclass
class GetLanguagesQueryParams:
    filter: Optional[GetLanguagesFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLanguagesRequest:
    query_params: GetLanguagesQueryParams = field(default=None)
    

@dataclass
class GetLanguagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    languages: Optional[List[shared.Language]] = field(default=None)
    

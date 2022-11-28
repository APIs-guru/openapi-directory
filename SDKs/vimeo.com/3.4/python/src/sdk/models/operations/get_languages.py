from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetLanguagesFilterEnum(str, Enum):
    TEXTTRACKS = "texttracks"


@dataclass
class GetLanguagesQueryParams:
    filter: Optional[GetLanguagesFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLanguagesRequest:
    query_params: GetLanguagesQueryParams = field()
    

@dataclass
class GetLanguagesResponse:
    content_type: str = field()
    status_code: int = field()
    languages: Optional[List[shared.Language]] = field(default=None)
    

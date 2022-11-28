from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TagAPIPostNewTagQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIPostNewTagRequest:
    query_params: TagAPIPostNewTagQueryParams = field()
    

@dataclass
class TagAPIPostNewTagResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag_base_contract: Optional[shared.TagBaseContract] = field(default=None)
    

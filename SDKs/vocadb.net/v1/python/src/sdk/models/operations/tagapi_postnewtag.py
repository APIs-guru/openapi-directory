from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TagAPIPostNewTagQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class TagAPIPostNewTagRequest:
    query_params: TagAPIPostNewTagQueryParams = field(default=None)
    

@dataclass
class TagAPIPostNewTagResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_base_contract: Optional[shared.TagBaseContract] = field(default=None)
    

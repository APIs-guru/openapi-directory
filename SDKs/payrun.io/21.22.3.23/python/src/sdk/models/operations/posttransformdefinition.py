from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostTransformDefinitionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostTransformDefinitionRequest:
    headers: PostTransformDefinitionHeaders = field(default=None)
    request: shared.TransformDefinition = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTransformDefinitionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    

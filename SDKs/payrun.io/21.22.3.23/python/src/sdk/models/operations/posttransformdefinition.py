from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostTransformDefinitionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTransformDefinitionRequest:
    headers: PostTransformDefinitionHeaders = field()
    request: shared.TransformDefinition = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTransformDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    

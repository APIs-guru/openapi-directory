from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutTransformDefinitionPathParams:
    transform_definition_id: str = field(metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTransformDefinitionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTransformDefinitionRequest:
    headers: PutTransformDefinitionHeaders = field()
    path_params: PutTransformDefinitionPathParams = field()
    request: shared.TransformDefinition = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTransformDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    transform_definition: Optional[shared.TransformDefinition] = field(default=None)
    

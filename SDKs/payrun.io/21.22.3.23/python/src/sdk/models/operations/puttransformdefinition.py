from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutTransformDefinitionPathParams:
    transform_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTransformDefinitionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTransformDefinitionRequest:
    path_params: PutTransformDefinitionPathParams = field(default=None)
    headers: PutTransformDefinitionHeaders = field(default=None)
    request: shared.TransformDefinition = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTransformDefinitionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    transform_definition: Optional[shared.TransformDefinition] = field(default=None)
    

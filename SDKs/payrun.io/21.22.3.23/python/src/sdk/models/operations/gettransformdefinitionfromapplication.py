from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransformDefinitionFromApplicationPathParams:
    transform_definition_id: str = field(metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransformDefinitionFromApplicationHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransformDefinitionFromApplicationRequest:
    headers: GetTransformDefinitionFromApplicationHeaders = field()
    path_params: GetTransformDefinitionFromApplicationPathParams = field()
    

@dataclass
class GetTransformDefinitionFromApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    transform_definition: Optional[shared.TransformDefinition] = field(default=None)
    

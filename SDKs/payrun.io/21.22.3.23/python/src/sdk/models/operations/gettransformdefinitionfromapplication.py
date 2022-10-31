from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransformDefinitionFromApplicationPathParams:
    transform_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransformDefinitionFromApplicationHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransformDefinitionFromApplicationRequest:
    path_params: GetTransformDefinitionFromApplicationPathParams = field(default=None)
    headers: GetTransformDefinitionFromApplicationHeaders = field(default=None)
    

@dataclass
class GetTransformDefinitionFromApplicationResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    transform_definition: Optional[shared.TransformDefinition] = field(default=None)
    

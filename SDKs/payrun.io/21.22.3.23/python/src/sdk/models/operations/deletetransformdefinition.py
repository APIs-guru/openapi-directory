from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTransformDefinitionPathParams:
    transform_definition_id: str = field(metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTransformDefinitionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTransformDefinitionRequest:
    headers: DeleteTransformDefinitionHeaders = field()
    path_params: DeleteTransformDefinitionPathParams = field()
    

@dataclass
class DeleteTransformDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    

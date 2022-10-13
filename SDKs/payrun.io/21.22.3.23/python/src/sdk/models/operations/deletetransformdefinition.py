from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTransformDefinitionPathParams:
    transform_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TransformDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTransformDefinitionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class DeleteTransformDefinitionRequest:
    path_params: DeleteTransformDefinitionPathParams = field(default=None)
    headers: DeleteTransformDefinitionHeaders = field(default=None)
    

@dataclass
class DeleteTransformDefinitionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    

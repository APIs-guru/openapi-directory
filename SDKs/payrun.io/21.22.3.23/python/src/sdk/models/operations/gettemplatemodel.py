from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTemplateModelPathParams:
    dto_data_type: str = field(metadata={'path_param': { 'field_name': 'DtoDataType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTemplateModelHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTemplateModelRequest:
    headers: GetTemplateModelHeaders = field()
    path_params: GetTemplateModelPathParams = field()
    

@dataclass
class GetTemplateModelResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_template_model_200_application_json_binary_string: Optional[bytes] = field(default=None)
    

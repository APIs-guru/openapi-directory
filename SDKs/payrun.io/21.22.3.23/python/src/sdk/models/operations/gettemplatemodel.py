from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTemplateModelPathParams:
    dto_data_type: str = field(default=None, metadata={'path_param': { 'field_name': 'DtoDataType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTemplateModelHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetTemplateModelRequest:
    path_params: GetTemplateModelPathParams = field(default=None)
    headers: GetTemplateModelHeaders = field(default=None)
    

@dataclass
class GetTemplateModelResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_template_model_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    

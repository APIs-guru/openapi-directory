from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchemaPathParams:
    dto_data_type: str = field(metadata={'path_param': { 'field_name': 'DtoDataType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchemaHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchemaRequest:
    headers: GetSchemaHeaders = field()
    path_params: GetSchemaPathParams = field()
    

@dataclass
class GetSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_schema_200_application_json_binary_string: Optional[bytes] = field(default=None)
    

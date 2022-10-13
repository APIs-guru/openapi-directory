from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchemaPathParams:
    dto_data_type: str = field(default=None, metadata={'path_param': { 'field_name': 'DtoDataType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchemaHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetSchemaRequest:
    path_params: GetSchemaPathParams = field(default=None)
    headers: GetSchemaHeaders = field(default=None)
    

@dataclass
class GetSchemaResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_schema_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    

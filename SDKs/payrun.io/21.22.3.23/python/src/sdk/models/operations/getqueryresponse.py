from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetQueryResponseHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQueryResponseRequest:
    headers: GetQueryResponseHeaders = field()
    request: shared.Query = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetQueryResponseResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_query_response_200_application_json_binary_string: Optional[bytes] = field(default=None)
    

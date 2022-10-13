from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetQueryResponseHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetQueryResponseRequest:
    headers: GetQueryResponseHeaders = field(default=None)
    request: shared.Query = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetQueryResponseResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_query_response_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    

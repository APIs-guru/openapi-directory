from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class V3CreatePayeeMultipartFormData:
    file: Optional[List[shared.CreatePayeesCsvRequest]] = field(default=None, metadata={'multipart_form': { 'field_name': 'file', 'json': True }})
    payor_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'payorId' }})
    

@dataclass
class V3CreatePayeeRequests:
    create_payees_request: Optional[shared.CreatePayeesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object: Optional[V3CreatePayeeMultipartFormData] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class V3CreatePayeeRequest:
    request: Optional[V3CreatePayeeRequests] = field(default=None)
    

@dataclass
class V3CreatePayeeResponse:
    content_type: str = field(default=None)
    create_payees_csv_response: Optional[shared.CreatePayeesCsvResponse] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

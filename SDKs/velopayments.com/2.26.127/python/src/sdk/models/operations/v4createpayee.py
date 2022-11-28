from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class V4CreatePayeeMultipartFormData:
    file: Optional[List[shared.CreatePayeesCsvRequest2]] = field(default=None, metadata={'multipart_form': { 'field_name': 'file', 'json': True }})
    payor_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'payorId' }})
    

@dataclass
class V4CreatePayeeRequestsInput:
    create_payees_request_2: Optional[shared.CreatePayeesRequest2Input] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object: Optional[V4CreatePayeeMultipartFormData] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class V4CreatePayeeRequest:
    request: Optional[V4CreatePayeeRequestsInput] = field(default=None)
    

@dataclass
class V4CreatePayeeResponse:
    content_type: str = field()
    status_code: int = field()
    create_payees_csv_response_2: Optional[shared.CreatePayeesCsvResponse2] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

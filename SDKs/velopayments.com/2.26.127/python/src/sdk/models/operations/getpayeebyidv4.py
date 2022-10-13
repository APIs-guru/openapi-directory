from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayeeByIDV4PathParams:
    payee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeeByIDV4QueryParams:
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayeeByIDV4Request:
    path_params: GetPayeeByIDV4PathParams = field(default=None)
    query_params: GetPayeeByIDV4QueryParams = field(default=None)
    

@dataclass
class GetPayeeByIDV4Response:
    content_type: str = field(default=None)
    payee_detail_response_2: Optional[shared.PayeeDetailResponse2] = field(default=None)
    status_code: int = field(default=None)
    

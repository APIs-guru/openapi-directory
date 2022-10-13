from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayeeByIDV3PathParams:
    payee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayeeByIDV3QueryParams:
    sensitive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayeeByIDV3Request:
    path_params: GetPayeeByIDV3PathParams = field(default=None)
    query_params: GetPayeeByIDV3QueryParams = field(default=None)
    

@dataclass
class GetPayeeByIDV3Response:
    content_type: str = field(default=None)
    payee_detail_response: Optional[shared.PayeeDetailResponse] = field(default=None)
    status_code: int = field(default=None)
    

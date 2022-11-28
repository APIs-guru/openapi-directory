from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PayeeDetailsUpdateV3PathParams:
    payee_id: str = field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayeeDetailsUpdateV3Request:
    path_params: PayeeDetailsUpdateV3PathParams = field()
    request: shared.UpdatePayeeDetailsRequestInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PayeeDetailsUpdateV3Response:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

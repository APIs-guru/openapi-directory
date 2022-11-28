from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PayeeDetailsUpdateV4PathParams:
    payee_id: str = field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayeeDetailsUpdateV4Request:
    path_params: PayeeDetailsUpdateV4PathParams = field()
    request: shared.UpdatePayeeDetailsRequest2Input = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PayeeDetailsUpdateV4Response:
    content_type: str = field()
    status_code: int = field()
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPositionsQueryParams:
    device_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    from_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPositionsRequest:
    query_params: GetPositionsQueryParams = field(default=None)
    

@dataclass
class GetPositionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    positions: Optional[List[shared.Position]] = field(default=None)
    status_code: int = field(default=None)
    

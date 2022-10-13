from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReportsRouteQueryParams:
    device_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    from_: datetime = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    group_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    to: datetime = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReportsRouteRequest:
    query_params: GetReportsRouteQueryParams = field(default=None)
    

@dataclass
class GetReportsRouteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    positions: Optional[List[shared.Position]] = field(default=None)
    status_code: int = field(default=None)
    

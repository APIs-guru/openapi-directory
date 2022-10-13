from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReportsEventsQueryParams:
    device_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    from_: datetime = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    group_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    to: datetime = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': False }})
    

@dataclass
class GetReportsEventsRequest:
    query_params: GetReportsEventsQueryParams = field(default=None)
    

@dataclass
class GetReportsEventsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    status_code: int = field(default=None)
    

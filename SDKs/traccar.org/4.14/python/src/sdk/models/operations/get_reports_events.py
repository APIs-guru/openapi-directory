from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReportsEventsQueryParams:
    from_: datetime = field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: datetime = field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    device_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': False }})
    

@dataclass
class GetReportsEventsRequest:
    query_params: GetReportsEventsQueryParams = field()
    

@dataclass
class GetReportsEventsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    

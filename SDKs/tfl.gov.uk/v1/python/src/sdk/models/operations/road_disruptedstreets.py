from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class RoadDisruptedStreetsQueryParams:
    end_date: datetime = field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: datetime = field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class RoadDisruptedStreetsRequest:
    query_params: RoadDisruptedStreetsQueryParams = field()
    

@dataclass
class RoadDisruptedStreetsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class RoadDisruptedStreetsQueryParams:
    end_date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class RoadDisruptedStreetsRequest:
    query_params: RoadDisruptedStreetsQueryParams = field(default=None)
    

@dataclass
class RoadDisruptedStreetsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    

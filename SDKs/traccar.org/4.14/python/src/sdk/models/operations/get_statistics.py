from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetStatisticsQueryParams:
    from_: datetime = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: datetime = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatisticsRequest:
    query_params: GetStatisticsQueryParams = field(default=None)
    

@dataclass
class GetStatisticsResponse:
    content_type: str = field(default=None)
    statistics: Optional[List[shared.Statistics]] = field(default=None)
    status_code: int = field(default=None)
    

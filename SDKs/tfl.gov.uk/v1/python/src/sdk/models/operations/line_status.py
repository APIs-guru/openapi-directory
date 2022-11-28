from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineStatusPathParams:
    end_date: str = field(metadata={'path_param': { 'field_name': 'EndDate', 'style': 'simple', 'explode': False }})
    start_date: str = field(metadata={'path_param': { 'field_name': 'StartDate', 'style': 'simple', 'explode': False }})
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineStatusQueryParams:
    end_date: str = field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: str = field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    date_range_end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateRange.endDate', 'style': 'form', 'explode': True }})
    date_range_start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateRange.startDate', 'style': 'form', 'explode': True }})
    detail: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'detail', 'style': 'form', 'explode': True }})
    

@dataclass
class LineStatusRequest:
    path_params: LineStatusPathParams = field()
    query_params: LineStatusQueryParams = field()
    

@dataclass
class LineStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    

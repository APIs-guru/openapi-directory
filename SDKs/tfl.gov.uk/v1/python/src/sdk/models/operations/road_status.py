from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class RoadStatusPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class RoadStatusQueryParams:
    date_range_nullable_end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateRangeNullable.endDate', 'style': 'form', 'explode': True }})
    date_range_nullable_start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateRangeNullable.startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class RoadStatusRequest:
    path_params: RoadStatusPathParams = field()
    query_params: RoadStatusQueryParams = field()
    

@dataclass
class RoadStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_road_corridors: Optional[List[shared.TflAPIPresentationEntitiesRoadCorridor]] = field(default=None)
    

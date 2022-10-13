from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetAPIDailyreportsDailyreportsQueryParams:
    date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    house: Optional[shared.HouseEnumEnum] = field(default=None, metadata={'query_param': { 'field_name': 'house', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIDailyreportsDailyreportsRequest:
    query_params: GetAPIDailyreportsDailyreportsQueryParams = field(default=None)
    

@dataclass
class GetAPIDailyreportsDailyreportsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    daily_report_view_model_search_result: Optional[shared.DailyReportViewModelSearchResult] = field(default=None)
    problem_details: Optional[dict[str, dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    

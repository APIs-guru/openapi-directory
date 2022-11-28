from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetUsersIDBudgetSummaryPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetUsersIDBudgetSummaryPeriodEnum(str, Enum):
    WEEKS = "weeks"
    MONTHS = "months"
    YEARS = "years"
    EVENT = "event"


@dataclass
class GetUsersIDBudgetSummaryQueryParams:
    end_date: str = field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    interval: int = field(metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    period: GetUsersIDBudgetSummaryPeriodEnum = field(metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    start_date: str = field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDBudgetSummaryRequest:
    path_params: GetUsersIDBudgetSummaryPathParams = field()
    query_params: GetUsersIDBudgetSummaryQueryParams = field()
    

@dataclass
class GetUsersIDBudgetSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    budget_analysis_packages: Optional[List[shared.BudgetAnalysisPackage]] = field(default=None)
    

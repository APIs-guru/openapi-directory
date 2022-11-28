from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class RootV1StatisticsConsolidatedDailyQueryParams:
    app_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AppId', 'style': 'form', 'explode': True }})
    company_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CompanyId', 'style': 'form', 'explode': True }})
    device_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DeviceToken', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Tag', 'style': 'form', 'explode': True }})
    

@dataclass
class RootV1StatisticsConsolidatedDailyRequest:
    query_params: RootV1StatisticsConsolidatedDailyQueryParams = field()
    

@dataclass
class RootV1StatisticsConsolidatedDailyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    

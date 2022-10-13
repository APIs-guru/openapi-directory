from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class RootV1ScoringsConsolidatedDailyQueryParams:
    app_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AppId', 'style': 'form', 'explode': True }})
    company_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CompanyId', 'style': 'form', 'explode': True }})
    device_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DeviceToken', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Tag', 'style': 'form', 'explode': True }})
    

@dataclass
class RootV1ScoringsConsolidatedDailyRequest:
    query_params: RootV1ScoringsConsolidatedDailyQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class RootV1ScoringsConsolidatedDaily200ApplicationJSONResult:
    acceleration_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccelerationScore' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    braking_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BrakingScore' }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyId' }})
    cornering_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CorneringScore' }})
    device_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceToken' }})
    distracted_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DistractedScore' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    overall_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverallScore' }})
    report_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportDate' }})
    speeding_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpeedingScore' }})
    

@dataclass_json
@dataclass
class RootV1ScoringsConsolidatedDaily200ApplicationJSON:
    errors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    result: Optional[List[RootV1ScoringsConsolidatedDaily200ApplicationJSONResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    status: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    

@dataclass
class RootV1ScoringsConsolidatedDailyResponse:
    root_v1_scorings_consolidated_daily_200_application_json_object: Optional[RootV1ScoringsConsolidatedDaily200ApplicationJSON] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

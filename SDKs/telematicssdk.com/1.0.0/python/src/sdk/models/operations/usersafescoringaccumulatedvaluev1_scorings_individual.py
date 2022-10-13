from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams:
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest:
    query_params: UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult:
    acceleration_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccelerationScore' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    braking_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BrakingScore' }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyId' }})
    cornering_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CorneringScore' }})
    device_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceToken' }})
    distracted_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DistractedScore' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    overall_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverallScore' }})
    speeding_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpeedingScore' }})
    

@dataclass_json
@dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON:
    errors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    result: Optional[UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    status: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    

@dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    user_safe_scoring_accumulated_value_v1_scorings_individual_200_application_json_object: Optional[UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON] = field(default=None)
    

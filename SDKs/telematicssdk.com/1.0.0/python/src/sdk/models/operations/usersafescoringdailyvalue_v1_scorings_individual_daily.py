from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams:
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Tag', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONResult:
    acceleration_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccelerationScore') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    braking_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BrakingScore') }})
    calc_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalcDate') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyId') }})
    cornering_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CorneringScore') }})
    device_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceToken') }})
    distracted_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DistractedScore') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    overall_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallScore') }})
    speeding_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpeedingScore') }})
    

@dataclass_json
@dataclass
class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON:
    errors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    result: Optional[List[UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    status: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    

@dataclass
class UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest:
    query_params: UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams = field()
    

@dataclass
class UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    user_safe_scoring_daily_value_v1_scorings_individual_daily_200_application_json_object: Optional[UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDSchedulesPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDSchedulesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    min_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'MinDate', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UserId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsTeamIDSchedulesRequest:
    path_params: GetTeamsTeamIDSchedulesPathParams = field(default=None)
    query_params: GetTeamsTeamIDSchedulesQueryParams = field(default=None)
    

@dataclass
class GetTeamsTeamIDSchedulesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    schedule_infos: Optional[List[shared.ScheduleInfo]] = field(default=None)
    status_code: int = field(default=None)
    

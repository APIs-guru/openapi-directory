from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSurveysSurveyIDInterviewsPathParams:
    survey_id: str = field(default=None, metadata={'path_param': { 'field_name': 'surveyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSurveysSurveyIDInterviewsQueryParams:
    max_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSurveysSurveyIDInterviewsRequest:
    path_params: GetSurveysSurveyIDInterviewsPathParams = field(default=None)
    query_params: GetSurveysSurveyIDInterviewsQueryParams = field(default=None)
    

@dataclass
class GetSurveysSurveyIDInterviewsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    interviews: Optional[List[shared.Interview]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSurveysSurveyIDInterviewsPathParams:
    survey_id: str = field(metadata={'path_param': { 'field_name': 'surveyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSurveysSurveyIDInterviewsQueryParams:
    max_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxLength', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSurveysSurveyIDInterviewsRequest:
    path_params: GetSurveysSurveyIDInterviewsPathParams = field()
    query_params: GetSurveysSurveyIDInterviewsQueryParams = field()
    

@dataclass
class GetSurveysSurveyIDInterviewsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    interviews: Optional[List[shared.Interview]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSurveysSurveyIDMetadataPathParams:
    survey_id: str = field(metadata={'path_param': { 'field_name': 'surveyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSurveysSurveyIDMetadataRequest:
    path_params: GetSurveysSurveyIDMetadataPathParams = field()
    

@dataclass
class GetSurveysSurveyIDMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    survey_metadata: Optional[shared.SurveyMetadata] = field(default=None)
    

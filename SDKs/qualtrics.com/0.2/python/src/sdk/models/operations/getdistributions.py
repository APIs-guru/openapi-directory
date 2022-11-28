from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistributionsQueryParams:
    survey_id: str = field(metadata={'query_param': { 'field_name': 'surveyId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDistributionsRequest:
    query_params: GetDistributionsQueryParams = field()
    

@dataclass
class GetDistributionsResponse:
    content_type: str = field()
    status_code: int = field()
    distributions_response: Optional[shared.DistributionsResponse] = field(default=None)
    

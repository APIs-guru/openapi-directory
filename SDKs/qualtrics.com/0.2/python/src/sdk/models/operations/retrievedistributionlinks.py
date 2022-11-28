from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrievedistributionlinksPathParams:
    distribution_id: str = field(metadata={'path_param': { 'field_name': 'DistributionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrievedistributionlinksQueryParams:
    survey_id: str = field(metadata={'query_param': { 'field_name': 'surveyId', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrievedistributionlinksRequest:
    path_params: RetrievedistributionlinksPathParams = field()
    query_params: RetrievedistributionlinksQueryParams = field()
    

@dataclass
class RetrievedistributionlinksResponse:
    content_type: str = field()
    status_code: int = field()
    retrieve_distribution_links_response: Optional[shared.RetrieveDistributionLinksResponse] = field(default=None)
    

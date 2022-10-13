from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrievedistributionlinksPathParams:
    distribution_id: str = field(default=None, metadata={'path_param': { 'field_name': 'DistributionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrievedistributionlinksQueryParams:
    survey_id: str = field(default=None, metadata={'query_param': { 'field_name': 'surveyId', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrievedistributionlinksRequest:
    path_params: RetrievedistributionlinksPathParams = field(default=None)
    query_params: RetrievedistributionlinksQueryParams = field(default=None)
    

@dataclass
class RetrievedistributionlinksResponse:
    content_type: str = field(default=None)
    retrieve_distribution_links_response: Optional[shared.RetrieveDistributionLinksResponse] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCallsQueryParams:
    validate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'validate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCallsRequest:
    query_params: GetCallsQueryParams = field(default=None)
    

@dataclass
class GetCallsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    one_get_responses_200_content_application_1json_schema: Optional[shared.OneGetResponses200ContentApplication1jsonSchema] = field(default=None)
    oneannouncements_post_responses_400_content_application_1json_schema: Optional[shared.OneannouncementsPostResponses400ContentApplication1jsonSchema] = field(default=None)
    oneannouncements_post_responses_403_content_application_1json_schema: Optional[shared.OneannouncementsPostResponses403ContentApplication1jsonSchema] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPINameSuggestionsQueryParams:
    starting_words: str = field(default=None, metadata={'query_param': { 'field_name': 'startingWords', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPINameSuggestionsHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPINameSuggestionsRequest:
    query_params: GetAPINameSuggestionsQueryParams = field(default=None)
    headers: GetAPINameSuggestionsHeaders = field(default=None)
    

@dataclass
class GetAPINameSuggestionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

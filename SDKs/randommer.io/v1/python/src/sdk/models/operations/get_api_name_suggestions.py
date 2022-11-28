from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPINameSuggestionsQueryParams:
    starting_words: str = field(metadata={'query_param': { 'field_name': 'startingWords', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPINameSuggestionsHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPINameSuggestionsRequest:
    headers: GetAPINameSuggestionsHeaders = field()
    query_params: GetAPINameSuggestionsQueryParams = field()
    

@dataclass
class GetAPINameSuggestionsResponse:
    content_type: str = field()
    status_code: int = field()
    

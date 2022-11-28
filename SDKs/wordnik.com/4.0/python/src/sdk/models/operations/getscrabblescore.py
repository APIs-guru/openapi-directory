from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetScrabbleScorePathParams:
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScrabbleScoreRequest:
    path_params: GetScrabbleScorePathParams = field()
    

@dataclass
class GetScrabbleScoreResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

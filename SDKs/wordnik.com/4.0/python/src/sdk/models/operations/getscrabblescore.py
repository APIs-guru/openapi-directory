from dataclasses import dataclass, field



@dataclass
class GetScrabbleScorePathParams:
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScrabbleScoreRequest:
    path_params: GetScrabbleScorePathParams = field(default=None)
    

@dataclass
class GetScrabbleScoreResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

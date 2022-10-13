from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSentencesFromBookPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSentencesFromBookQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSentencesFromBookRequest:
    path_params: GetSentencesFromBookPathParams = field(default=None)
    query_params: GetSentencesFromBookQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSentencesFromBook200ApplicationJSON:
    data: Optional[List[shared.Sentence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetSentencesFromBookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_sentences_from_book_200_application_json_object: Optional[GetSentencesFromBook200ApplicationJSON] = field(default=None)
    

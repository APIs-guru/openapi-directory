from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSentencesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSentencesRequest:
    query_params: GetSentencesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSentences200ApplicationJSON:
    data: Optional[List[shared.Sentence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetSentencesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_sentences_200_application_json_object: Optional[GetSentences200ApplicationJSON] = field(default=None)
    

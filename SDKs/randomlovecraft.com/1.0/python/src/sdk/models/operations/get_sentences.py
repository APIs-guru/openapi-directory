from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSentencesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSentences200ApplicationJSON:
    data: Optional[List[shared.Sentence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetSentencesRequest:
    query_params: GetSentencesQueryParams = field()
    

@dataclass
class GetSentencesResponse:
    content_type: str = field()
    status_code: int = field()
    get_sentences_200_application_json_object: Optional[GetSentences200ApplicationJSON] = field(default=None)
    

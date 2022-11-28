from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSpecificSentencePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetSpecificSentence200ApplicationJSON:
    data: Optional[shared.Sentence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetSpecificSentenceRequest:
    path_params: GetSpecificSentencePathParams = field()
    

@dataclass
class GetSpecificSentenceResponse:
    content_type: str = field()
    status_code: int = field()
    get_specific_sentence_200_application_json_object: Optional[GetSpecificSentence200ApplicationJSON] = field(default=None)
    

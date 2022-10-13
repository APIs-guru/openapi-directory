from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSpecificSentencePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecificSentenceRequest:
    path_params: GetSpecificSentencePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSpecificSentence200ApplicationJSON:
    data: Optional[shared.Sentence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetSpecificSentenceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_specific_sentence_200_application_json_object: Optional[GetSpecificSentence200ApplicationJSON] = field(default=None)
    

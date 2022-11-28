from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateANewQuestionRequestBody:
    choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    

@dataclass
class CreateANewQuestionRequest:
    request: Optional[CreateANewQuestionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateANewQuestionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateANewQuestionRequestBody:
    choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'choices' }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'question' }})
    

@dataclass
class CreateANewQuestionRequest:
    request: Optional[CreateANewQuestionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateANewQuestionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

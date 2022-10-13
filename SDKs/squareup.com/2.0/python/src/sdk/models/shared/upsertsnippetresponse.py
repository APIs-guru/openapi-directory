from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import snippet


@dataclass_json
@dataclass
class UpsertSnippetResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    snippet: Optional[snippet.Snippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    

from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import snippet


@dataclass_json
@dataclass
class UpsertSnippetRequest:
    snippet: snippet.Snippet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    

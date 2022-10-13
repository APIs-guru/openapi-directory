from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import book


@dataclass_json
@dataclass
class Sentence:
    book: Optional[book.Book] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'book' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    sentence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentence' }})
    

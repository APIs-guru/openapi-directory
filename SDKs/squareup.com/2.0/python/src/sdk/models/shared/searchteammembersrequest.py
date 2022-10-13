from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import searchteammembersquery


@dataclass_json
@dataclass
class SearchTeamMembersRequest:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    query: Optional[searchteammembersquery.SearchTeamMembersQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    

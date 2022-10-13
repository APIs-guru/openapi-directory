from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepositoryInfoBody:
    branch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prebuild_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prebuildHash' }})
    repo_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repoId' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gitconfigoptionsbody
from . import repositoryinfobody


@dataclass_json
@dataclass
class SeedInfoBody:
    git_config: Optional[gitconfigoptionsbody.GitConfigOptionsBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitConfig' }})
    recurse_clone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurseClone' }})
    repository: Optional[repositoryinfobody.RepositoryInfoBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    seed_moniker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seedMoniker' }})
    seed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seedType' }})
    

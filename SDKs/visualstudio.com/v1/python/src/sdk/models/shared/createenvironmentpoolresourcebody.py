from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import prebuildenvironmentoptions
from . import secretdatabody


@dataclass_json
@dataclass
class CreateEnvironmentPoolResourceBody:
    environment_options: Optional[prebuildenvironmentoptions.PrebuildEnvironmentOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentOptions' }})
    secrets: Optional[List[secretdatabody.SecretDataBody]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    

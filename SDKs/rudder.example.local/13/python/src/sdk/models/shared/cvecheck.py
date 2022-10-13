from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CveCheckPackages:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class CveCheck:
    cve_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cveId' }})
    nodes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    packages: Optional[List[CveCheckPackages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    

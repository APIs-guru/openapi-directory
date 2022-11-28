from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CveCheckPackages:
    r"""CveCheckPackages
    Packages affected by this CVE
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class CveCheck:
    cve_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cveId') }})
    nodes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    packages: Optional[List[CveCheckPackages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    

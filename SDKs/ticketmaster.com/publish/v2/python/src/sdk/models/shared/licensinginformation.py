from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LicensingInformation:
    r"""LicensingInformation
    This class defines an entitlement data on the Publish API
    """
    
    license: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    region_restriction: Optional[RegionRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionRestriction') }})
    

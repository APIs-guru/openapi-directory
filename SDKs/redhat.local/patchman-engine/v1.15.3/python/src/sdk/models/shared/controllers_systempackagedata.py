from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ControllersSystemPackageData:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    evra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evra') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    updatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatable') }})
    updates: Optional[List[ModelsPackageUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updates') }})
    

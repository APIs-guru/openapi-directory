from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VariableLabel:
    alt_labels: Optional[List[AltLabel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altLabels') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class VariableVariableValuesRange:
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class VariableVariableValues:
    range: Optional[VariableVariableValuesRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    values: Optional[List[Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclass
class Variable:
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ident') }})
    label: Optional[VariableLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    max_responses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResponses') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentType') }})
    questions: Optional[List[Variable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questions') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    use: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use') }})
    variable_values: Optional[VariableVariableValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variableValues') }})
    

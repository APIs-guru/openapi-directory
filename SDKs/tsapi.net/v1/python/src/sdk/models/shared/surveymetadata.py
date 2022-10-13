from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hierarchy
from . import language
from . import variable


@dataclass_json
@dataclass
class SurveyMetadata:
    hierarchies: Optional[List[hierarchy.Hierarchy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hierarchies' }})
    interview_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interviewCount' }})
    languages: Optional[List[language.Language]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    variables: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    

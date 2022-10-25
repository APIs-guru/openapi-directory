from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryQueryGroup:
    group: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Group' }})
    

@dataclass_json
@dataclass
class QueryQueryVariable:
    variable: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variable' }})
    

@dataclass_json
@dataclass
class QueryQuery:
    exclude_null_or_empty_elements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeNullOrEmptyElements' }})
    groups: Optional[QueryQueryGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Groups' }})
    root_node_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootNodeName' }})
    suppress_metric_attributes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressMetricAttributes' }})
    variables: Optional[QueryQueryVariable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variables' }})
    

@dataclass_json
@dataclass
class Query:
    query: Optional[QueryQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Query' }})
    

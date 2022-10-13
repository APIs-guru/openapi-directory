from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportDefinitionReportDefinitionReportQueryGroupsGroup:
    group: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Group' }})
    

@dataclass_json
@dataclass
class ReportDefinitionReportDefinitionReportQueryVariablesVariable:
    variable: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variable' }})
    

@dataclass_json
@dataclass
class ReportDefinitionReportDefinitionReportQueryReportQuery:
    exclude_null_or_empty_elements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeNullOrEmptyElements' }})
    groups: Optional[ReportDefinitionReportDefinitionReportQueryGroupsGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Groups' }})
    root_node_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootNodeName' }})
    suppress_metric_attributes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressMetricAttributes' }})
    variables: Optional[ReportDefinitionReportDefinitionReportQueryVariablesVariable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variables' }})
    

@dataclass_json
@dataclass
class ReportDefinitionReportDefinitionReportDefinition:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Active' }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Readonly' }})
    report_query: Optional[ReportDefinitionReportDefinitionReportQueryReportQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportQuery' }})
    supported_transforms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedTransforms' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    

@dataclass_json
@dataclass
class ReportDefinition:
    report_definition: Optional[ReportDefinitionReportDefinitionReportDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportDefinition' }})
    

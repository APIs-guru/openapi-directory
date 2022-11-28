from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportDefinitionReportDefinitionReportQueryGroup:
    r"""ReportDefinitionReportDefinitionReportQueryGroup
    The querys' groups
    """
    
    group: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    

@dataclass_json
@dataclass
class ReportDefinitionReportDefinitionReportQueryVariable:
    r"""ReportDefinitionReportDefinitionReportQueryVariable
    The querys' variables
    """
    
    variable: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variable') }})
    

@dataclass_json
@dataclass
class ReportDefinitionReportDefinitionReportQuery:
    r"""ReportDefinitionReportDefinitionReportQuery
    The report definitions' report query
    """
    
    exclude_null_or_empty_elements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeNullOrEmptyElements') }})
    groups: Optional[ReportDefinitionReportDefinitionReportQueryGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    root_node_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootNodeName') }})
    suppress_metric_attributes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressMetricAttributes') }})
    variables: Optional[ReportDefinitionReportDefinitionReportQueryVariable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    

@dataclass_json
@dataclass
class ReportDefinitionReportDefinition:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Readonly') }})
    report_query: Optional[ReportDefinitionReportDefinitionReportQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportQuery') }})
    supported_transforms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedTransforms') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    

@dataclass_json
@dataclass
class ReportDefinition:
    report_definition: Optional[ReportDefinitionReportDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportDefinition') }})
    

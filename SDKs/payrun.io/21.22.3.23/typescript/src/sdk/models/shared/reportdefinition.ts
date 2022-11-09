import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportDefinitionReportDefinitionReportQueryGroup
/** 
 * The querys' groups
**/
export class ReportDefinitionReportDefinitionReportQueryGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Group" })
  group?: any[];
}


// ReportDefinitionReportDefinitionReportQueryVariable
/** 
 * The querys' variables
**/
export class ReportDefinitionReportDefinitionReportQueryVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=Variable" })
  variable?: any[];
}


// ReportDefinitionReportDefinitionReportQuery
/** 
 * The report definitions' report query
**/
export class ReportDefinitionReportDefinitionReportQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExcludeNullOrEmptyElements" })
  excludeNullOrEmptyElements?: boolean;

  @Metadata({ data: "json, name=Groups" })
  groups?: ReportDefinitionReportDefinitionReportQueryGroup;

  @Metadata({ data: "json, name=RootNodeName" })
  rootNodeName?: string;

  @Metadata({ data: "json, name=SuppressMetricAttributes" })
  suppressMetricAttributes?: boolean;

  @Metadata({ data: "json, name=Variables" })
  variables?: ReportDefinitionReportDefinitionReportQueryVariable;
}


export class ReportDefinitionReportDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean;

  @Metadata({ data: "json, name=Readonly" })
  readonly?: boolean;

  @Metadata({ data: "json, name=ReportQuery" })
  reportQuery?: ReportDefinitionReportDefinitionReportQuery;

  @Metadata({ data: "json, name=SupportedTransforms" })
  supportedTransforms?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}


export class ReportDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReportDefinition" })
  reportDefinition?: ReportDefinitionReportDefinition;
}

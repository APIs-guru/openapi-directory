import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportDefinitionReportDefinitionReportQueryGroup
/** 
 * The querys' groups
**/
export class ReportDefinitionReportDefinitionReportQueryGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: any[];
}


// ReportDefinitionReportDefinitionReportQueryVariable
/** 
 * The querys' variables
**/
export class ReportDefinitionReportDefinitionReportQueryVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Variable" })
  variable?: any[];
}


// ReportDefinitionReportDefinitionReportQuery
/** 
 * The report definitions' report query
**/
export class ReportDefinitionReportDefinitionReportQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExcludeNullOrEmptyElements" })
  excludeNullOrEmptyElements?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Groups" })
  groups?: ReportDefinitionReportDefinitionReportQueryGroup;

  @SpeakeasyMetadata({ data: "json, name=RootNodeName" })
  rootNodeName?: string;

  @SpeakeasyMetadata({ data: "json, name=SuppressMetricAttributes" })
  suppressMetricAttributes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Variables" })
  variables?: ReportDefinitionReportDefinitionReportQueryVariable;
}


export class ReportDefinitionReportDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Readonly" })
  readonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReportQuery" })
  reportQuery?: ReportDefinitionReportDefinitionReportQuery;

  @SpeakeasyMetadata({ data: "json, name=SupportedTransforms" })
  supportedTransforms?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}


export class ReportDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReportDefinition" })
  reportDefinition?: ReportDefinitionReportDefinition;
}

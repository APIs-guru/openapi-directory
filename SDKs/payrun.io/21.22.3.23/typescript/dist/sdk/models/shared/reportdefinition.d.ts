import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The querys' groups
**/
export declare class ReportDefinitionReportDefinitionReportQueryGroup extends SpeakeasyBase {
    group?: any[];
}
/**
 * The querys' variables
**/
export declare class ReportDefinitionReportDefinitionReportQueryVariable extends SpeakeasyBase {
    variable?: any[];
}
/**
 * The report definitions' report query
**/
export declare class ReportDefinitionReportDefinitionReportQuery extends SpeakeasyBase {
    excludeNullOrEmptyElements?: boolean;
    groups?: ReportDefinitionReportDefinitionReportQueryGroup;
    rootNodeName?: string;
    suppressMetricAttributes?: boolean;
    variables?: ReportDefinitionReportDefinitionReportQueryVariable;
}
export declare class ReportDefinitionReportDefinition extends SpeakeasyBase {
    active?: boolean;
    readonly?: boolean;
    reportQuery?: ReportDefinitionReportDefinitionReportQuery;
    supportedTransforms?: string;
    title?: string;
    version?: string;
}
export declare class ReportDefinition extends SpeakeasyBase {
    reportDefinition?: ReportDefinitionReportDefinition;
}

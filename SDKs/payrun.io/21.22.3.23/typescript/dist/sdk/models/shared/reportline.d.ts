import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportLineReportLine extends SpeakeasyBase {
    description?: string;
    generated?: Date;
    taxMonth?: number;
    taxYear?: number;
    value?: number;
}
export declare class ReportLine extends SpeakeasyBase {
    reportLine?: ReportLineReportLine;
}

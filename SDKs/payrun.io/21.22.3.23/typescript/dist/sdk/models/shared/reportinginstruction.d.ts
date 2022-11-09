import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ReportingInstructionReportingInstruction extends SpeakeasyBase {
    endDate?: Date;
    startDate?: Date;
    taxMonth?: number;
    taxYear?: number;
    value?: number;
}
export declare class ReportingInstruction extends SpeakeasyBase {
    reportingInstruction?: ReportingInstructionReportingInstruction;
}

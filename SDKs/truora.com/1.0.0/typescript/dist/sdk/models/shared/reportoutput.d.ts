import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Reprents the report creation result
**/
export declare class ReportOutput extends SpeakeasyBase {
    checks: string;
    report: Report;
    self?: string;
}

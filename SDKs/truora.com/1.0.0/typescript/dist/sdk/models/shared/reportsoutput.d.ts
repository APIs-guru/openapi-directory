import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Represents the result of report searches
**/
export declare class ReportsOutput extends SpeakeasyBase {
    next?: string;
    reports: Report[];
    self: string;
}

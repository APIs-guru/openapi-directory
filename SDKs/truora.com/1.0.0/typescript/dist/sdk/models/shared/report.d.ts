import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents reports
**/
export declare class Report extends SpeakeasyBase {
    createdBy?: string;
    createdChecksCount?: number;
    creationDate: Date;
    hasData?: boolean;
    id: string;
    invalidChecksCount?: number;
    name: string;
    size?: number;
    updateDate: Date;
}

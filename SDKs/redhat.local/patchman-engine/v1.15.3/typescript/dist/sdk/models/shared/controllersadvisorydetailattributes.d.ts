import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ControllersAdvisoryDetailAttributes extends SpeakeasyBase {
    cves?: string[];
    description?: string;
    fixes?: string;
    modifiedDate?: string;
    packages?: Map<string, string>;
    publicDate?: string;
    references?: string[];
    severity?: number;
    solution?: string;
    synopsis?: string;
    topic?: string;
}

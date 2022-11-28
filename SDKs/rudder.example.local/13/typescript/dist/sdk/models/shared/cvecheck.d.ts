import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Packages affected by this CVE
**/
export declare class CveCheckPackages extends SpeakeasyBase {
    name?: string;
    version?: string;
}
export declare class CveCheck extends SpeakeasyBase {
    cveId?: string;
    nodes?: string[];
    packages?: CveCheckPackages[];
}

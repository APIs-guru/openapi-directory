import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DirectivePolicyModeEnum {
    Enforce = "enforce",
    Audit = "audit"
}
export declare class DirectiveTags extends SpeakeasyBase {
    name?: string;
}
export declare class Directive extends SpeakeasyBase {
    displayName?: string;
    enabled?: boolean;
    id?: string;
    longDescription?: string;
    parameters?: Map<string, any>;
    policyMode?: DirectivePolicyModeEnum;
    priority?: number;
    shortDescription?: string;
    system?: boolean;
    tags?: DirectiveTags[];
    techniqueName?: string;
    techniqueVersion?: string;
}

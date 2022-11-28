import { SpeakeasyBase } from "../../../internal/utils";
export declare class DirectiveNewTags extends SpeakeasyBase {
    name?: string;
}
export declare class DirectiveNew extends SpeakeasyBase {
    displayName?: string;
    enabled?: boolean;
    id?: string;
    longDescription?: string;
    parameters?: Map<string, any>;
    priority?: number;
    shortDescription?: string;
    source?: string;
    system?: boolean;
    tags?: DirectiveNewTags[];
    techniqueName?: string;
    techniqueVersion?: string;
}

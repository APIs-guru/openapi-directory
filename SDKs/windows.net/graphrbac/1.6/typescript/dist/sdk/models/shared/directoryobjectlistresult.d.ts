import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DirectoryObject list operation result.
**/
export declare class DirectoryObjectListResult extends SpeakeasyBase {
    odataNextLink?: string;
    value?: Map<string, Map<string, any>>[];
}

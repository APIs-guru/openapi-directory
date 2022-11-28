import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encapsulates a list of results.
**/
export declare class ResultPage extends SpeakeasyBase {
    items?: Map<string, any>[];
    restrictedRights?: boolean;
    total?: number;
}

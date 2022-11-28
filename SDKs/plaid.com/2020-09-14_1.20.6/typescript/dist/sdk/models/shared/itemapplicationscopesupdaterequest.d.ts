import { SpeakeasyBase } from "../../../internal/utils";
import { Scopes } from "./scopes";
/**
 * ItemApplicationScopesUpdateRequest defines the request schema for `/item/application/scopes/update`
**/
export declare class ItemApplicationScopesUpdateRequest extends SpeakeasyBase {
    accessToken: string;
    applicationId: string;
    clientId?: string;
    scopes: Scopes;
    secret?: string;
}

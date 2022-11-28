import { SpeakeasyBase } from "../../../internal/utils";
import { UserEmbeddedObject } from "./userembeddedobject";
import { Links } from "./links";
export declare class UserHalResponse extends SpeakeasyBase {
    embedded?: UserEmbeddedObject;
    links?: Links;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
}

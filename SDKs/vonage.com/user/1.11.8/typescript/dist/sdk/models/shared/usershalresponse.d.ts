import { SpeakeasyBase } from "../../../internal/utils";
import { UsersEmbeddedObject } from "./usersembeddedobject";
import { Links } from "./links";
export declare class UsersHalResponse extends SpeakeasyBase {
    embedded?: UsersEmbeddedObject;
    links?: Links;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
}

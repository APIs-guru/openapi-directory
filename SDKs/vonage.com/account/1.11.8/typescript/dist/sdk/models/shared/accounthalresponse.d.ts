import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountEmbeddedObject } from "./accountembeddedobject";
import { Links } from "./links";
export declare class AccountHalResponse extends SpeakeasyBase {
    embedded?: AccountEmbeddedObject;
    links?: Links;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
}

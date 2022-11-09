import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemImportRequestOptions } from "./itemimportrequestoptions";
import { ProductsEnum } from "./productsenum";
import { ItemImportRequestUserAuth } from "./itemimportrequestuserauth";
/**
 * ItemImportRequest defines the request schema for `/item/import`
**/
export declare class ItemImportRequest extends SpeakeasyBase {
    clientId?: string;
    options?: ItemImportRequestOptions;
    products: ProductsEnum[];
    secret?: string;
    userAuth: ItemImportRequestUserAuth;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemImportRequestOptions } from "./itemimportrequestoptions";
import { ProductsEnum } from "./productsenum";
import { ItemImportRequestUserAuth } from "./itemimportrequestuserauth";


// ItemImportRequest
/** 
 * ItemImportRequest defines the request schema for `/item/import`
**/
export class ItemImportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=options" })
  options?: ItemImportRequestOptions;

  @Metadata({ data: "json, name=products" })
  products: ProductsEnum[];

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=user_auth" })
  userAuth: ItemImportRequestUserAuth;
}

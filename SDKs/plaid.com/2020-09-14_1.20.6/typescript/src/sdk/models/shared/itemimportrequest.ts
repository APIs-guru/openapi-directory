import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemImportRequestOptions } from "./itemimportrequestoptions";
import { ProductsEnum } from "./productsenum";
import { ItemImportRequestUserAuth } from "./itemimportrequestuserauth";



// ItemImportRequest
/** 
 * ItemImportRequest defines the request schema for `/item/import`
**/
export class ItemImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: ItemImportRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products: ProductsEnum[];

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=user_auth" })
  userAuth: ItemImportRequestUserAuth;
}

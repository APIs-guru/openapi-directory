import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountResource } from "./accountresource";



export class ListAccountsResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev: string;
}


// ListAccountsResponse
/** 
 * Successful response to get all accounts. This returns a paginated list of
 * accounts, which can be scrolled by following the `prev` and `next` links
 * if present.
 * 
**/
export class ListAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: AccountResource })
  data: AccountResource[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListAccountsResponseLinks;
}

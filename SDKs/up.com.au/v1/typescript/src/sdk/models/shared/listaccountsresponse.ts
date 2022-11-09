import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountResource } from "./accountresource";


export class ListAccountsResponseLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next: string;

  @Metadata({ data: "json, name=prev" })
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
  @Metadata({ data: "json, name=data", elemType: shared.AccountResource })
  data: AccountResource[];

  @Metadata({ data: "json, name=links" })
  links: ListAccountsResponseLinks;
}

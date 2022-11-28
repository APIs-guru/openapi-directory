import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountFilter
/** 
 * Enumerates the account subtypes that the application wishes for the user to be able to select from. For more details refer to Plaid documentation on account filters.
**/
export class AccountFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credit" })
  credit?: string[];

  @SpeakeasyMetadata({ data: "json, name=depository" })
  depository?: string[];

  @SpeakeasyMetadata({ data: "json, name=investment" })
  investment?: string[];

  @SpeakeasyMetadata({ data: "json, name=loan" })
  loan?: string[];
}

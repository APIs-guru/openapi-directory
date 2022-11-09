import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountFilter
/** 
 * Enumerates the account subtypes that the application wishes for the user to be able to select from. For more details refer to Plaid documentation on account filters.
**/
export class AccountFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=credit" })
  credit?: string[];

  @Metadata({ data: "json, name=depository" })
  depository?: string[];

  @Metadata({ data: "json, name=investment" })
  investment?: string[];

  @Metadata({ data: "json, name=loan" })
  loan?: string[];
}

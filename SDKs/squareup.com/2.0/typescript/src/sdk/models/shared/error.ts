import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Error
/** 
 * Represents an error encountered during a request to the Connect API.
 * 
 * See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: string;

  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;
}

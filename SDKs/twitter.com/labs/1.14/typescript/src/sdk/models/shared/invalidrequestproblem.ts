import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InvalidRequestProblemErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string[]>;
}


// InvalidRequestProblem
/** 
 * A problem that indicates this request is invalid.
**/
export class InvalidRequestProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=errors", elemType: shared.InvalidRequestProblemErrors })
  errors?: InvalidRequestProblemErrors[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvalidRequestProblemErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string[]>;
}


// InvalidRequestProblem
/** 
 * A problem that indicates this request is invalid.
**/
export class InvalidRequestProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: InvalidRequestProblemErrors })
  errors?: InvalidRequestProblemErrors[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

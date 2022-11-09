import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnsupportedAuthenticationProblem
/** 
 * A problem that indicates that the authentication used is not supported.
**/
export class UnsupportedAuthenticationProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}

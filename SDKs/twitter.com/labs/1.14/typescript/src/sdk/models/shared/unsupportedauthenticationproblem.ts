import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnsupportedAuthenticationProblem
/** 
 * A problem that indicates that the authentication used is not supported.
**/
export class UnsupportedAuthenticationProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

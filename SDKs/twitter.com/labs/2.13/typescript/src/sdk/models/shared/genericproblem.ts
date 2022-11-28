import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenericProblem
/** 
 * A generic problem with no additional information beyond that provided by the HTTP status code.
**/
export class GenericProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

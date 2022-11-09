import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenericProblem
/** 
 * A generic problem with no additional information beyond that provided by the HTTP status code.
**/
export class GenericProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=status" })
  status: number;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}

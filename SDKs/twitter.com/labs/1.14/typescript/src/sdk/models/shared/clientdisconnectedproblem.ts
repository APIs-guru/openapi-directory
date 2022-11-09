import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClientDisconnectedProblem
/** 
 * Your client has gone away.
**/
export class ClientDisconnectedProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}

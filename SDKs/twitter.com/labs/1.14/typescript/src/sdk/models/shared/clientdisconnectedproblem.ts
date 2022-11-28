import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientDisconnectedProblem
/** 
 * Your client has gone away.
**/
export class ClientDisconnectedProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

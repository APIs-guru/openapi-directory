import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ActionsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetPathParams;
}


export class ActionsGetResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ActionInformation })
  actionInformations?: shared.ActionInformation[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

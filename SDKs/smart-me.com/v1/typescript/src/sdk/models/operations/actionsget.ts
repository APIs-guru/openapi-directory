import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ActionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetPathParams;
}


export class ActionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ActionInformation })
  actionInformations?: shared.ActionInformation[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

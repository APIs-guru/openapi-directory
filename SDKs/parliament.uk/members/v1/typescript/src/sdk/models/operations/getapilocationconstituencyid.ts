import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiLocationConstituencyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiLocationConstituencyIdPathParams;
}


export class GetApiLocationConstituencyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  constituencyItem?: shared.ConstituencyItem;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

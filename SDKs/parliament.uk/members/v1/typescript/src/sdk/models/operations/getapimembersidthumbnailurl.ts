import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersIdThumbnailUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdThumbnailUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdThumbnailUrlPathParams;
}


export class GetApiMembersIdThumbnailUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stringItem?: shared.StringItem;
}

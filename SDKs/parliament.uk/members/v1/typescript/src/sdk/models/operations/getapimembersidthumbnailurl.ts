import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdThumbnailUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdThumbnailUrlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdThumbnailUrlPathParams;
}


export class GetApiMembersIdThumbnailUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stringItem?: shared.StringItem;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdPortraitUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdPortraitUrlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdPortraitUrlPathParams;
}


export class GetApiMembersIdPortraitUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stringItem?: shared.StringItem;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdSynopsisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdSynopsisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdSynopsisPathParams;
}


export class GetApiMembersIdSynopsisResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stringItem?: shared.StringItem;
}

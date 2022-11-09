import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostNewThirdPartyJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostNewThirdPartyJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostNewThirdPartyJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ThirdPartyJobInstruction;
}


export class PostNewThirdPartyJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  link?: shared.Link;

  @Metadata()
  statusCode: number;
}

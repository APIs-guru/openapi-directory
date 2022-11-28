import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostNewThirdPartyJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostNewThirdPartyJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostNewThirdPartyJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ThirdPartyJobInstruction;
}


export class PostNewThirdPartyJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  link?: shared.Link;

  @SpeakeasyMetadata()
  statusCode: number;
}

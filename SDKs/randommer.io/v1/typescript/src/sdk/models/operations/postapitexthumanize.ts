import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiTextHumanizeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class PostApiTextHumanizeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  textDto?: shared.TextDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  textDto1?: shared.TextDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  textDto2?: shared.TextDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  textDto3?: shared.TextDto;
}


export class PostApiTextHumanizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostApiTextHumanizeHeaders;

  @SpeakeasyMetadata()
  request: PostApiTextHumanizeRequests;
}


export class PostApiTextHumanizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

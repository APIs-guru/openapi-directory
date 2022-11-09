import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiTextHumanizeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class PostApiTextHumanizeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  textDto?: shared.TextDto;

  @Metadata({ data: "request, media_type=application/json" })
  textDto1?: shared.TextDto;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  textDto2?: shared.TextDto;

  @Metadata({ data: "request, media_type=text/json" })
  textDto3?: shared.TextDto;
}


export class PostApiTextHumanizeRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostApiTextHumanizeHeaders;

  @Metadata()
  request: PostApiTextHumanizeRequests;
}


export class PostApiTextHumanizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

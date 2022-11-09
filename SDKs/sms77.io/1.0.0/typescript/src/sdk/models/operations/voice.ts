import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VoiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=xml" })
  xml?: number;
}


export class VoiceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VoiceQueryParams;
}


export class VoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voice200TextPlainString?: string;
}

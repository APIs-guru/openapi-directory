import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VoiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xml" })
  xml?: number;
}


export class VoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VoiceQueryParams;
}


export class VoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voice200TextPlainString?: string;
}

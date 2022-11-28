import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidateForVoiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class ValidateForVoice200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class ValidateForVoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ValidateForVoiceQueryParams;
}


export class ValidateForVoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validateForVoice200ApplicationJsonObject?: ValidateForVoice200ApplicationJson;
}

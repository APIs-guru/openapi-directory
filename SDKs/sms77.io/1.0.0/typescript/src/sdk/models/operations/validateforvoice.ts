import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ValidateForVoiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=number" })
  number: string;
}


export class ValidateForVoiceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ValidateForVoiceQueryParams;
}


export class ValidateForVoice200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class ValidateForVoiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validateForVoice200ApplicationJsonObject?: ValidateForVoice200ApplicationJson;
}

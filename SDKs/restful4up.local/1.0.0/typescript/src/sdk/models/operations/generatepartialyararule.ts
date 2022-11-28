import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GeneratePartialYaraRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class GeneratePartialYaraRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

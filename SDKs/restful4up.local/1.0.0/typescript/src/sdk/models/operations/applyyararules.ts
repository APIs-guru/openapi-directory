import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplyYaraRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class ApplyYaraRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

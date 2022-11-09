import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GeneratePartialYaraRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: any;
}


export class GeneratePartialYaraRuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

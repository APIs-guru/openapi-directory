import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TransformOutputRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=json;json=true" })
  json?: shared.SeldonMessage;
}


export class TransformOutputRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: TransformOutputRequestBody;
}


export class TransformOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seldonMessage?: shared.SeldonMessage;

  @Metadata()
  statusCode: number;
}

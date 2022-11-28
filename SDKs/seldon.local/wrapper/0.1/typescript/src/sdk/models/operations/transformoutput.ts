import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransformOutputRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=json;json=true" })
  json?: shared.SeldonMessage;
}


export class TransformOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: TransformOutputRequestBody;
}


export class TransformOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seldonMessage?: shared.SeldonMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}

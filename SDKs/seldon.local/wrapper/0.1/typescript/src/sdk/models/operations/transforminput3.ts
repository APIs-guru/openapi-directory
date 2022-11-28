import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransformInput3RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=json;json=true" })
  json?: shared.SeldonMessage;
}


export class TransformInput3Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: TransformInput3RequestBody;
}


export class TransformInput3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seldonMessage?: shared.SeldonMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}

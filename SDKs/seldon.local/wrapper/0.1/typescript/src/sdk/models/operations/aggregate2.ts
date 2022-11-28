import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Aggregate2RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=json;json=true" })
  json?: shared.SeldonMessageList;
}


export class Aggregate2Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: Aggregate2RequestBody;
}


export class Aggregate2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seldonMessage?: shared.SeldonMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}

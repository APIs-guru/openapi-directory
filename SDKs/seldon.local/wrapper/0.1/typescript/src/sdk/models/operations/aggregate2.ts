import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Aggregate2RequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=json;json=true" })
  json?: shared.SeldonMessageList;
}


export class Aggregate2Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: Aggregate2RequestBody;
}


export class Aggregate2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seldonMessage?: shared.SeldonMessage;

  @Metadata()
  statusCode: number;
}

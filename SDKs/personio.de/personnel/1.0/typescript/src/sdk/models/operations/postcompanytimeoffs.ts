import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCompanyTimeOffsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTimeOffPeriodRequest;
}


export class PostCompanyTimeOffs201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.CreateTimeOffPeriodResponse;
}


export class PostCompanyTimeOffsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  postCompanyTimeOffs201ApplicationJsonObject?: PostCompanyTimeOffs201ApplicationJson;

  @Metadata()
  statusCode: number;
}

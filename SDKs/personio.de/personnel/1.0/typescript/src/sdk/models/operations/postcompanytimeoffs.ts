import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompanyTimeOffs201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.CreateTimeOffPeriodResponse;
}


export class PostCompanyTimeOffsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateTimeOffPeriodRequest;
}


export class PostCompanyTimeOffsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  postCompanyTimeOffs201ApplicationJsonObject?: PostCompanyTimeOffs201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

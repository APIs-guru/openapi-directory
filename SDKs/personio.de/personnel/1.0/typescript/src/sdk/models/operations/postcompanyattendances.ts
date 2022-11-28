import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompanyAttendancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NewAttendancePeriodRequest;
}


export class PostCompanyAttendancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  detailedErrorResponse?: shared.DetailedErrorResponse;

  @SpeakeasyMetadata()
  newAttendancePeriodResponse?: shared.NewAttendancePeriodResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

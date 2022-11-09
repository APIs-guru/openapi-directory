import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCompanyAttendancesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NewAttendancePeriodRequest;
}


export class PostCompanyAttendancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  detailedErrorResponse?: shared.DetailedErrorResponse;

  @Metadata()
  newAttendancePeriodResponse?: shared.NewAttendancePeriodResponse;

  @Metadata()
  statusCode: number;
}

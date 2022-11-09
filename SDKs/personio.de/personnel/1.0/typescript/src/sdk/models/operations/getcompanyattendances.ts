import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCompanyAttendancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=employees" })
  employees?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updated_from" })
  updatedFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updated_to" })
  updatedTo?: string;
}


export class GetCompanyAttendancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCompanyAttendancesQueryParams;
}


export class GetCompanyAttendancesResponse extends SpeakeasyBase {
  @Metadata()
  attendancePeriodsResponse?: shared.AttendancePeriodsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

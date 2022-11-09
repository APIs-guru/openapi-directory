import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReleaseEventApiPostReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}

export enum ReleaseEventApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo"
,    Duplicate = "Duplicate"
,    Inappropriate = "Inappropriate"
,    Other = "Other"
}


export class ReleaseEventApiPostReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: ReleaseEventApiPostReportReportTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=versionNumber" })
  versionNumber: number;
}


export class ReleaseEventApiPostReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseEventApiPostReportPathParams;

  @Metadata()
  queryParams: ReleaseEventApiPostReportQueryParams;
}


export class ReleaseEventApiPostReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReleaseEventApiPostReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}

export enum ReleaseEventApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo",
    Duplicate = "Duplicate",
    Inappropriate = "Inappropriate",
    Other = "Other"
}


export class ReleaseEventApiPostReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: ReleaseEventApiPostReportReportTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionNumber" })
  versionNumber: number;
}


export class ReleaseEventApiPostReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseEventApiPostReportPathParams;

  @SpeakeasyMetadata()
  queryParams: ReleaseEventApiPostReportQueryParams;
}


export class ReleaseEventApiPostReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

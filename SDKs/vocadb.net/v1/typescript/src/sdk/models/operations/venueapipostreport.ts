import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VenueApiPostReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum VenueApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo"
,    Duplicate = "Duplicate"
,    Inappropriate = "Inappropriate"
,    Other = "Other"
}


export class VenueApiPostReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: VenueApiPostReportReportTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=versionNumber" })
  versionNumber: number;
}


export class VenueApiPostReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VenueApiPostReportPathParams;

  @Metadata()
  queryParams: VenueApiPostReportQueryParams;
}


export class VenueApiPostReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

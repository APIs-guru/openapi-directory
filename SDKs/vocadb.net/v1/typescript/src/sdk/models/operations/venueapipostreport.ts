import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VenueApiPostReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum VenueApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo",
    Duplicate = "Duplicate",
    Inappropriate = "Inappropriate",
    Other = "Other"
}


export class VenueApiPostReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: VenueApiPostReportReportTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionNumber" })
  versionNumber: number;
}


export class VenueApiPostReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VenueApiPostReportPathParams;

  @SpeakeasyMetadata()
  queryParams: VenueApiPostReportQueryParams;
}


export class VenueApiPostReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

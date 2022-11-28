import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagApiPostReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}

export enum TagApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo",
    Duplicate = "Duplicate",
    Inappropriate = "Inappropriate",
    Other = "Other"
}


export class TagApiPostReportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: TagApiPostReportReportTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionNumber" })
  versionNumber: number;
}


export class TagApiPostReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagApiPostReportPathParams;

  @SpeakeasyMetadata()
  queryParams: TagApiPostReportQueryParams;
}


export class TagApiPostReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagApiPostReportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}

export enum TagApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo"
,    Duplicate = "Duplicate"
,    Inappropriate = "Inappropriate"
,    Other = "Other"
}


export class TagApiPostReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType: TagApiPostReportReportTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=versionNumber" })
  versionNumber: number;
}


export class TagApiPostReportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagApiPostReportPathParams;

  @Metadata()
  queryParams: TagApiPostReportQueryParams;
}


export class TagApiPostReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

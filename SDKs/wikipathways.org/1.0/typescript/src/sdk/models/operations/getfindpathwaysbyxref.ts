import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFindPathwaysByXrefFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetFindPathwaysByXrefQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=codes" })
  codes?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFindPathwaysByXrefFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: any[];
}


export class GetFindPathwaysByXrefRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFindPathwaysByXrefQueryParams;
}


export class GetFindPathwaysByXrefResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

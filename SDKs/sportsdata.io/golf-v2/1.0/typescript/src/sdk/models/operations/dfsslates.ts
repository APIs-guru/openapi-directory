import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DfsSlatesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class DfsSlatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DfsSlatesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" })
  tournamentid: string;
}


export class DfsSlatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfsSlatesPathParams;
}


export class DfsSlatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dfsSlates?: any[];

  @Metadata()
  statusCode: number;
}

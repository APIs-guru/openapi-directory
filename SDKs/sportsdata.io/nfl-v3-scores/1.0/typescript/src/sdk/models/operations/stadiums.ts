import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StadiumsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class StadiumsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: StadiumsFormatEnum;
}


export class StadiumsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StadiumsPathParams;
}


export class StadiumsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  stadiums?: any[];

  @Metadata()
  statusCode: number;
}

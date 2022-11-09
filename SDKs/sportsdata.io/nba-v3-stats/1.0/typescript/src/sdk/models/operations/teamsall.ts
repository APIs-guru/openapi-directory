import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamsAllFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamsAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamsAllFormatEnum;
}


export class TeamsAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAllPathParams;
}


export class TeamsAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teams?: any[];
}

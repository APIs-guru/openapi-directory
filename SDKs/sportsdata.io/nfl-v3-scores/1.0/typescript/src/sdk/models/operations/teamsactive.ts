import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamsActiveFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamsActivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamsActiveFormatEnum;
}


export class TeamsActiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsActivePathParams;
}


export class TeamsActiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teams?: any[];
}

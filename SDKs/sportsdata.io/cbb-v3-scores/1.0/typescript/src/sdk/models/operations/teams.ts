import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamsFormatEnum;
}


export class TeamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsPathParams;
}


export class TeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teams?: any[];
}

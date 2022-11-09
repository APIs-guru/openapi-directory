import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CurrentSeasontypeFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class CurrentSeasontypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CurrentSeasontypeFormatEnum;
}


export class CurrentSeasontypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CurrentSeasontypePathParams;
}


export class CurrentSeasontypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  currentSeasontype200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}

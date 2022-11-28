import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamGameStatsByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamGameStatsByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamGameStatsByDateFormatEnum;
}


export class TeamGameStatsByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamGameStatsByDatePathParams;
}


export class TeamGameStatsByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamGames?: any[];
}

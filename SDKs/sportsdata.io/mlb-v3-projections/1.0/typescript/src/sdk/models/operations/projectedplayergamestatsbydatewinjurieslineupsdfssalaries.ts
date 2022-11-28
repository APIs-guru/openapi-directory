import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum;
}


export class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

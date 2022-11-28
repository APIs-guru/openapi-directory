import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum;
}


export class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams;
}


export class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGameProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

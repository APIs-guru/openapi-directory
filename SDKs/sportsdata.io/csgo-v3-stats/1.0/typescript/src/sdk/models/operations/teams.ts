import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class TeamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamsFormatEnum;
}


export class TeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsPathParams;
}


export class TeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teams?: any[];
}

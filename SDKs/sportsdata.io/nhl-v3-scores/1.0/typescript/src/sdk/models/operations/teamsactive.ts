import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamsActiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamsActivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamsActiveFormatEnum;
}


export class TeamsActiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsActivePathParams;
}


export class TeamsActiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teams?: any[];
}

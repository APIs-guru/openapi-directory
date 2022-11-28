import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamsAllFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamsAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamsAllFormatEnum;
}


export class TeamsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAllPathParams;
}


export class TeamsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teams?: any[];
}

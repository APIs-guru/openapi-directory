import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InjuriesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class InjuriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: InjuriesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class InjuriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InjuriesPathParams;
}


export class InjuriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  injuries?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

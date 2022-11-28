import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StadiumsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class StadiumsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: StadiumsFormatEnum;
}


export class StadiumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StadiumsPathParams;
}


export class StadiumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  stadiums?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

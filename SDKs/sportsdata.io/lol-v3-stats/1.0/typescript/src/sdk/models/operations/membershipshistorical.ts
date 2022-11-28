import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipsHistoricalFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class MembershipsHistoricalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsHistoricalFormatEnum;
}


export class MembershipsHistoricalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembershipsHistoricalPathParams;
}


export class MembershipsHistoricalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberships?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

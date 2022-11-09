import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipsHistoricalFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class MembershipsHistoricalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsHistoricalFormatEnum;
}


export class MembershipsHistoricalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MembershipsHistoricalPathParams;
}


export class MembershipsHistoricalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  memberships?: any[];

  @Metadata()
  statusCode: number;
}

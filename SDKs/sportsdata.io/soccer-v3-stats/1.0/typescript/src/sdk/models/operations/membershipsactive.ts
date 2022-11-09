import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipsActiveFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class MembershipsActivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsActiveFormatEnum;
}


export class MembershipsActiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MembershipsActivePathParams;
}


export class MembershipsActiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  memberships?: any[];

  @Metadata()
  statusCode: number;
}

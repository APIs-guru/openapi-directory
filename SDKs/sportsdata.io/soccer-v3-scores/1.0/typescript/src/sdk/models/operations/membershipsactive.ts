import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipsActiveFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class MembershipsActivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsActiveFormatEnum;
}


export class MembershipsActiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembershipsActivePathParams;
}


export class MembershipsActiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberships?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

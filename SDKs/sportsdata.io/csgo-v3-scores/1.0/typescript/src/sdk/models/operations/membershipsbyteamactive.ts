import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipsByTeamActiveFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class MembershipsByTeamActivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsByTeamActiveFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamid" })
  teamid: string;
}


export class MembershipsByTeamActiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembershipsByTeamActivePathParams;
}


export class MembershipsByTeamActiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberships?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

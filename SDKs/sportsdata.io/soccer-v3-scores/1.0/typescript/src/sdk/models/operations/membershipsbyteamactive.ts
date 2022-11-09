import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipsByTeamActiveFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class MembershipsByTeamActivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsByTeamActiveFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamid" })
  teamid: string;
}


export class MembershipsByTeamActiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MembershipsByTeamActivePathParams;
}


export class MembershipsByTeamActiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  memberships?: any[];

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipsByTeamHistoricalFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class MembershipsByTeamHistoricalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsByTeamHistoricalFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamid" })
  teamid: string;
}


export class MembershipsByTeamHistoricalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MembershipsByTeamHistoricalPathParams;
}


export class MembershipsByTeamHistoricalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  memberships?: any[];

  @Metadata()
  statusCode: number;
}

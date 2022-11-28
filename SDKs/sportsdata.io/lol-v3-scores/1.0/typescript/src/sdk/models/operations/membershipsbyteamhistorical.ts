import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipsByTeamHistoricalFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class MembershipsByTeamHistoricalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsByTeamHistoricalFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamid" })
  teamid: string;
}


export class MembershipsByTeamHistoricalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembershipsByTeamHistoricalPathParams;
}


export class MembershipsByTeamHistoricalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberships?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

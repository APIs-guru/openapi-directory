import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipsByCompetitionHistoricalFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class MembershipsByCompetitionHistoricalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsByCompetitionHistoricalFormatEnum;
}


export class MembershipsByCompetitionHistoricalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MembershipsByCompetitionHistoricalPathParams;
}


export class MembershipsByCompetitionHistoricalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  memberships?: any[];

  @Metadata()
  statusCode: number;
}

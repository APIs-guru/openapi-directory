import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipsByCompetitionActiveFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class MembershipsByCompetitionActivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsByCompetitionActiveFormatEnum;
}


export class MembershipsByCompetitionActiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MembershipsByCompetitionActivePathParams;
}


export class MembershipsByCompetitionActiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  memberships?: any[];

  @Metadata()
  statusCode: number;
}

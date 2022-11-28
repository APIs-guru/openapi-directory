import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipsByCompetitionActiveFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class MembershipsByCompetitionActivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsByCompetitionActiveFormatEnum;
}


export class MembershipsByCompetitionActiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembershipsByCompetitionActivePathParams;
}


export class MembershipsByCompetitionActiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberships?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipsByCompetitionHistoricalFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class MembershipsByCompetitionHistoricalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=competition" })
  competition: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsByCompetitionHistoricalFormatEnum;
}


export class MembershipsByCompetitionHistoricalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembershipsByCompetitionHistoricalPathParams;
}


export class MembershipsByCompetitionHistoricalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberships?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}

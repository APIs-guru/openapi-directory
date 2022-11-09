import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUserUsernameTokenKindKindEnum {
    Access = "'access'"
,    Refresh = "'refresh'"
,    Authorization = "'authorization'"
,    Id = "'id'"
,    Selfie = "'selfie'"
,    Plain = "'plain'"
}


export class GetUserUsernameTokenKindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=kind" })
  kind: GetUserUsernameTokenKindKindEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUserUsernameTokenKindQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;
}


export class GetUserUsernameTokenKindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserUsernameTokenKindPathParams;

  @Metadata()
  queryParams: GetUserUsernameTokenKindQueryParams;
}


export class GetUserUsernameTokenKindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

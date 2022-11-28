import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUserUsernameTokenKindKindEnum {
    Access = "'access'",
    Refresh = "'refresh'",
    Authorization = "'authorization'",
    Id = "'id'",
    Selfie = "'selfie'",
    Plain = "'plain'"
}


export class GetUserUsernameTokenKindPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=kind" })
  kind: GetUserUsernameTokenKindKindEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUserUsernameTokenKindQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;
}


export class GetUserUsernameTokenKindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserUsernameTokenKindPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserUsernameTokenKindQueryParams;
}


export class GetUserUsernameTokenKindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

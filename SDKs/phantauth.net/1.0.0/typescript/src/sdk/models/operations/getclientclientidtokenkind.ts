import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetClientClientIdTokenKindKindEnum {
    Registration = "'registration'",
    Selfie = "'selfie'",
    Plain = "'plain'"
}


export class GetClientClientIdTokenKindPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=kind" })
  kind: GetClientClientIdTokenKindKindEnum;
}


export class GetClientClientIdTokenKindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClientClientIdTokenKindPathParams;
}


export class GetClientClientIdTokenKindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

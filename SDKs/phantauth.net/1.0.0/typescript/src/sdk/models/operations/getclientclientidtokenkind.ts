import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetClientClientIdTokenKindKindEnum {
    Registration = "'registration'"
,    Selfie = "'selfie'"
,    Plain = "'plain'"
}


export class GetClientClientIdTokenKindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=kind" })
  kind: GetClientClientIdTokenKindKindEnum;
}


export class GetClientClientIdTokenKindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClientClientIdTokenKindPathParams;
}


export class GetClientClientIdTokenKindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

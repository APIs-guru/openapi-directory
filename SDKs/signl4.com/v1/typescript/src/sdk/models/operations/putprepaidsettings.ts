import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutPrepaidSettingsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  prepaidSettingsInfo?: shared.PrepaidSettingsInfo;

  @Metadata({ data: "request, media_type=application/json" })
  prepaidSettingsInfo1?: shared.PrepaidSettingsInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  prepaidSettingsInfo2?: shared.PrepaidSettingsInfo;

  @Metadata({ data: "request, media_type=text/json" })
  prepaidSettingsInfo3?: shared.PrepaidSettingsInfo;
}


export class PutPrepaidSettingsRequest extends SpeakeasyBase {
  @Metadata()
  request?: PutPrepaidSettingsRequests;
}


export class PutPrepaidSettingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  prepaidSettingsInfo?: shared.PrepaidSettingsInfo;

  @Metadata()
  statusCode: number;
}

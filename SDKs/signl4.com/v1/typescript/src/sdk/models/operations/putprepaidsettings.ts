import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPrepaidSettingsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  prepaidSettingsInfo?: shared.PrepaidSettingsInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  prepaidSettingsInfo1?: shared.PrepaidSettingsInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  prepaidSettingsInfo2?: shared.PrepaidSettingsInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  prepaidSettingsInfo3?: shared.PrepaidSettingsInfo;
}


export class PutPrepaidSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PutPrepaidSettingsRequests;
}


export class PutPrepaidSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  prepaidSettingsInfo?: shared.PrepaidSettingsInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}

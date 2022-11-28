import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PicoSettingsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PicoSettingsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PicoSettingsGetPathParams;
}


export class PicoSettingsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  picoSettingsDto?: shared.PicoSettingsDto;

  @SpeakeasyMetadata()
  statusCode: number;
}

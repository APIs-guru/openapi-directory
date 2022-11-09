import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PicoSettingsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PicoSettingsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PicoSettingsGetPathParams;
}


export class PicoSettingsGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  picoSettingsDto?: shared.PicoSettingsDto;

  @Metadata()
  statusCode: number;
}

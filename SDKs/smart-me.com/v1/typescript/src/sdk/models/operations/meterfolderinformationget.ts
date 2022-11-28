import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeterFolderInformationGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class MeterFolderInformationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeterFolderInformationGetPathParams;
}


export class MeterFolderInformationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  meterFolderInformation?: shared.MeterFolderInformation;

  @SpeakeasyMetadata()
  statusCode: number;
}

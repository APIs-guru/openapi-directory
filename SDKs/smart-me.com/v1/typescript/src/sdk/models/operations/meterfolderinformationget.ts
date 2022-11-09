import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MeterFolderInformationGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class MeterFolderInformationGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MeterFolderInformationGetPathParams;
}


export class MeterFolderInformationGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  meterFolderInformation?: shared.MeterFolderInformation;

  @Metadata()
  statusCode: number;
}

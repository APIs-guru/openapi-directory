import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiVirtualTariffIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApiVirtualTariffIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiVirtualTariffIdPathParams;
}


export class GetApiVirtualTariffIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  virtualTariffsOfFolder?: shared.VirtualTariffsOfFolder;
}

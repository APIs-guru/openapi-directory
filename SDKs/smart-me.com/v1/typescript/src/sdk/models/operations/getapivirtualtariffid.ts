import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVirtualTariffIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetApiVirtualTariffIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVirtualTariffIdPathParams;
}


export class GetApiVirtualTariffIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualTariffsOfFolder?: shared.VirtualTariffsOfFolder;
}

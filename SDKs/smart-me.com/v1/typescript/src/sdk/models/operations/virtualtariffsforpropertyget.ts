import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualTariffsForPropertyGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class VirtualTariffsForPropertyGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualTariffsForPropertyGetPathParams;
}


export class VirtualTariffsForPropertyGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.VirtualTariffsOfFolder })
  virtualTariffsOfFolders?: shared.VirtualTariffsOfFolder[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualTariffConsumptionGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=folderId" })
  folderId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class VirtualTariffConsumptionGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VirtualTariffConsumptionGetQueryParams;
}


export class VirtualTariffConsumptionGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.VirtualTariffConsumptionData })
  virtualTariffConsumptionData?: shared.VirtualTariffConsumptionData[];
}

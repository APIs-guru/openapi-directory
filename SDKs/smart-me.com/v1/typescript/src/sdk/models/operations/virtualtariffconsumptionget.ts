import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualTariffConsumptionGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=folderId" })
  folderId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class VirtualTariffConsumptionGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VirtualTariffConsumptionGetQueryParams;
}


export class VirtualTariffConsumptionGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.VirtualTariffConsumptionData })
  virtualTariffConsumptionData?: shared.VirtualTariffConsumptionData[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExportTransactionsCsvv4IncludeEnum {
    PayorOnly = "payorOnly",
    PayorAndDescendants = "payorAndDescendants"
}


export class ExportTransactionsCsvv4QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: ExportTransactionsCsvv4IncludeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class ExportTransactionsCsvv4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportTransactionsCsvv4QueryParams;
}


export class ExportTransactionsCsvv4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

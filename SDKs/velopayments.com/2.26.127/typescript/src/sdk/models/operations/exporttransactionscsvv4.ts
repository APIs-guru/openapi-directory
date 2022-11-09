import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExportTransactionsCsvv4IncludeEnum {
    PayorOnly = "payorOnly"
,    PayorAndDescendants = "payorAndDescendants"
}


export class ExportTransactionsCsvv4QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: ExportTransactionsCsvv4IncludeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class ExportTransactionsCsvv4Request extends SpeakeasyBase {
  @Metadata()
  queryParams: ExportTransactionsCsvv4QueryParams;
}


export class ExportTransactionsCsvv4Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
